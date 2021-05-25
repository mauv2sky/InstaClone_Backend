import bcrypt from "bcrypt"
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
        }
    }
}