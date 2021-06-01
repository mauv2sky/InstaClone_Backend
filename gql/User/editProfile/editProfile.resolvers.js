import client from "../../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
    Mutation : {
        editProfile: async (
            _,
            {
                firstName, 
                lastName, 
                email, 
                userName, 
                password: newPassword
            },
            { loggedInUser }
        ) => {
            let uglyPassword  = null;
            if(newPassword){
                uglyPassword = await bcrypt.hash(newPassword, 10);
            }

            const updatedUser = await client.user.update({
                where: {
                    id: loggedInUser.id
                },
                data: {
                    firstName, 
                    lastName, 
                    email, 
                    userName, 
                    ...(uglyPassword && {password: uglyPassword})
                }
            });
            if(updatedUser.id){
                return {
                    ok: true
                }
            } else {
                return {
                    ok: false,
                    error: "Could not update profile."
                }
            }
        }
    }
}