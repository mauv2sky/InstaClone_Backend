import client from "../../../client";
import { protectedResolver } from "../../user/users.utils";

export default {
    Mutation: {
        readMessage: protectedResolver(async (_, { id }, { loggedInUser }) => {
            const message = await client.message.findFirst({
                where: {
                    id,
                    user: {
                        id: {
                            not: loggedInUser.id
                        }
                    },
                    room: {
                        user: {
                            some: {
                                id: loggedInUser.id
                            }
                        }
                    }
                },
                select: {
                    id: true
                }
            });
            if (!message) {
                return {
                    ok: false,
                    error: "message not found."
                }
            } else {
                await client.message.update({
                    where: {
                        id
                    },
                    data: {
                        read: true
                    }
                })
            }
            return {
                ok: true
            }
        })
    }
}