import client from "../../../client";
import { protectedResolver } from "../../user/users.utils";

export default {
    Query: {
        seeFeed: protectedResolver((_, __, { loggedInUser }) =>
            client.photo.findMany({
                where: {
                    OR: [
                        {
                            user: {
                                follower: {
                                    some: {
                                        id: loggedInUser.id
                                    }
                                }
                            }
                        },
                        {
                            userId: loggedInUser.id
                        }
                    ]
                },
                orderBy: {
                    createdAt: "desc"
                }
            })

        )
    }
}