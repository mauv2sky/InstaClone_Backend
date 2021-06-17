import client from "../../../client";
import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

export default {
    Mutation: {
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
                let avatarUrl = null;
                if (avatar) {
                    avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");
                    /* // use during dev state
                    const {filename, createReadStream} = await avatar;
                    const readStream = createReadStream();
                    const newFileName = `${loggedInUser.id}-${Date.now()}-${filename}`;
                    const writeStream = createWriteStream(process.cwd() + "/uploads/" + newFileName);
                    readStream.pipe(writeStream);
                    avatarUrl = "http://localhost:4000/static/" + newFileName; */
                }

                let uglyPassword = null;
                if (newPassword) {
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
                        bio,
                        ...(uglyPassword && { password: uglyPassword }),
                        ...(avatarUrl && { avatar: avatarUrl })
                    }
                });
                if (updatedUser.id) {
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