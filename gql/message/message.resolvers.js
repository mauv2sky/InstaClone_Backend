import client from "../../client";
import { protectedResolver } from "../user/users.utils";

export default {
    Room: {
        users: ({ id }) => client.room.findUnique({ where: { id } }).users(),
        messages: ({ id }) => client.message.findMany({
            where: {
                roomId: id
            }
        }),
        unreadTotal: protectedResolver((_, { id }, { loggedInUser }) => {
            if (!loggedInUser) {
                return 0;
            } else {
                return client.message.count({
                    where: {
                        read: false,
                        roomId: id,
                        user: {
                            id: {
                                not: loggedInUser.id
                            }
                        }
                    }
                })
            }
        })
    },
    Message: {
        isMine: ({ userId }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false
            }
            return userId === loggedInUser.id
        }
    }
}