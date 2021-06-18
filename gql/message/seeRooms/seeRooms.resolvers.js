import client from "../../../client";

export default {
    Query: {
        seeRooms: (_, __, { loggedInUser }) =>
            client.room.findMany({
                where: {
                    user: {
                        some: {
                            id: loggedInUser.id
                        }
                    }
                }
            })
    }
}