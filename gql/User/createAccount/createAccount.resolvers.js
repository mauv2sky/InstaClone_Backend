import client from "../../../client"
import bcrypt from "bcrypt"

export default {
    Mutation: {
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
                    throw new Error("This username/password is already token.")
                }
                const uglyPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data: {
                        firstName,
                        lastName,
                        email,
                        userName,
                        password: uglyPassword
                    }
                });
                return {
                    ok: true
                };
            } catch(e) {
                return {
                    ok: false,
                    error: "Can't create account."
                };
            }
        }
    }
}