import client from "../../../client"
import bcrypt from "bcrypt"

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
                const uglyPassword = await bcrypt.hash(password, 10);
                return client.user.create({
                    data: {
                        firstName,
                        lastName,
                        email,
                        userName,
                        password: uglyPassword
                    }
                });
            } catch(e) {
                return e;
            }
        }
    }
}