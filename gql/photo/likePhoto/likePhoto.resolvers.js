import client from "../../../client";
import { protectedResolver } from "../../user/users.utils";

export default {
    Mutation: {
        likePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
            const photo = await client.photo.findUnique({
                where: {
                    id
                }
            })
            if (!photo) {
                return {
                    ok: false,
                    error: "Can't like that photo."
                }
            }
            const like = await client.like.findUnique({
                where: {
                    photoId_userId: {
                        userId: loggedInUser.id,
                        photoId: photo.id
                    }
                }
            })
            if (like) {
                await client.like.delete({
                    where: {
                        id: like.id
                    }
                });
            } else {
                await client.like.create({
                    data: {
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        },
                        photo: {
                            connect: {
                                id: photo.id
                            }
                        }
                    }
                })
            }
            return {
                ok: true
            }
        })
    }
}