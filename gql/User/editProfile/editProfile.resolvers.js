import client from "../../../client";
import {createWriteStream} from "fs";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";

export default {
    Mutation : {
        editProfile: protectedResolver(
            async (
                _,
                {
                    firstName, 
                    lastName, 
                    email, 
                    userName, 
                    password: newPassword,
                    bio,
                    avatar
                },
                { loggedInUser }
            ) => {
                const {filename, createReadStream} = await avatar;
                const readStream = createReadStream();
                const writeStream = createWriteStream(process.cwd() + "/uploads/" + filename);
                readStream.pipe(writeStream);
                
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
                        ...(uglyPassword && {password: uglyPassword}),
                        bio
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
        )
    }
}