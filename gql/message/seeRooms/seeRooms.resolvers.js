import client from '../../../client';

export default {
    Query: {
        seeRooms: (_, __, { loggedInUser }) => {
            const rooms = client.room.findMany({
                where: {
                    users: {
                        some: {
                            id: loggedInUser.id,
                        },
                    },
                },
            });

            return {
                rooms,
            };
        },
    },
};
