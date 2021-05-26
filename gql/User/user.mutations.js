import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import client from "../../client";


export default {
    Mutation : {
        createAccount: async (_, {
            firstName, 
            lastName,
            userName,
            email,
            password }
        ) => {
            try{
                // check if username or email are already on DB
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            { userName },
                            { email }
                        ]
                    }
                });

                if(existingUser){
                    return new Error("This username/password is already token.")
                }

                const realPassword = await bcrypt.hash(password, 10);
                return client.user.create({
                    data: {
                        firstName,
                        lastName,
                        email,
                        userName,
                        password: realPassword
                    }
                });
            } catch(e) {
                return e;
            }
        },
        login: async (_, {userName, password}) => {
            // find user with args.userName
            const user = await client.user.findFirst({ where: {userName} });
            if(!user){
                return {
                    ok: false,
                    error: "User not found."
                }
            }
            // check password with args.password
            const passwordOk = await bcrypt.compare(password, user.password);
            if(!passwordOk){
                return {
                    ok: false,
                    error: "Incorrect password."
                }
            }
            // send token
            const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
            return {
                ok: true,
                token
            }
        },
        editProfile: async (_, {firstName, lastName, email, userName, password}) => {
            
        }
    }
}