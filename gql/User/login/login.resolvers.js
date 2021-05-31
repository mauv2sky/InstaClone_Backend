import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import client from "../../../client";

export default {
    Mutation: {
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
        }
    }
}