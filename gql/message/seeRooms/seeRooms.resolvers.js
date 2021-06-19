import client from "../../../client";

export default {
    Query: {
        seeRooms: (_, __, { loggedInUser }) =>
            client.room.findMany({
                where: {
                    users: {
                        some: {
                            id: loggedInUser.id
                        }
                    }
                }
            })
    }
}