import { withFilter } from "apollo-server-express";
import client from "../../../client";
import { NEW_MESSAGE } from "../../../constants";
import pubSub from "../../../pubSub";

export default {
    Subscription: {
        roomUpdates: {
            subscribe: async (root, args, context, info) => {
                const room = await client.room.findUnique({
                    where: {
                        id: args.id
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
                    ({ roomUpdates }, { id }) => {
                        return roomUpdates.roomId === id;
                    }
                )(root, args, context, info)
            }
        }
    }
}