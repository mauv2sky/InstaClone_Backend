import { withFilter } from "apollo-server-express";
import client from "../../../client";
import { NEW_MESSAGE } from "../../../constants";
import pubSub from "../../../pubSub";

export default {
    Subscription: {
        roomUpdates: {
            subscribe: async (root, args, context, info) => {
                const room = await client.room.findFirst({
                    where: {
                        id: args.id,
                        users: {
                            some: {
                                id: context.loggedInUser.id
                            }
                        }
                    },
                    select: {
                        id: true
                    }
                })
                if (!room) {
                    throw new Error("Could not see this.")
                }
                return withFilter(
                    () => pubSub.asyncIterator(NEW_MESSAGE),
                    async ({ roomUpdates }, { id }, { loggedInUser }) => {
                        if (roomUpdates.roomId === id) {
                            const room = await client.room.findFirst({
                                where: {
                                    id,
                                    users: {
                                        some: {
                                            id: loggedInUser.id
                                        }
                                    }
                                },
                                select: {
                                    id: true
                                }
                            });
                            if (!room) {
                                return false;
                            } else {
                                return true;
                            }
                        }

                    }
                )(root, args, context, info);
            }
        }
    }
}