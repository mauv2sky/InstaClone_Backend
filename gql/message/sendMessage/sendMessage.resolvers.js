import client from "../../../client";
import { NEW_MESSAGE } from "../../../constants";
import pubSub from "../../../pubSub";
import { protectedResolver } from "../../user/users.utils";

export default {
    Mutation: {
        sendMessage: protectedResolver(async (_, { payload, userId, roomId }, { loggedInUser }) => {
            let room = null;
            if (userId) {
                const user = await client.user.findUnique({
                    where: {
                        id: userId
                    },
                    select: {
                        id: true
                    }
                })
                if (!user) {
                    return {
                        ok: false,
                        error: "User does not exist."
                    }
                } else {
                    room = await client.room.create({
                        data: {
                            users: {
                                connect: [
                                    { id: userId },
                                    { id: loggedInUser.id }
                                ]
                            }
                        }
                    })
                }
            } else if (roomId) {
                room = await client.room.findUnique({
                    where: {
                        id: roomId
                    },
                    select: {
                        id: true
                    }
                })
                if (!room) {
                    return {
                        ok: false,
                        error: "Room not exist."
                    }
                }
            }
            const message = await client.message.create({
                data: {
                    payload,
                    room: {
                        connect: {
                            id: room.id
                        }
                    },
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    }
                }
            })
            pubSub.publish(NEW_MESSAGE, { roomUpdates: { ...message } });
            return {
                ok: true
            }
        })
    }
}