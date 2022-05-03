import client from '../../../client';
import { protectedResolver } from '../../user/users.utils';

export default {
    Query: {
        seeRoom: protectedResolver((_, { id }, { loggedInUser }) => {
            const room = client.room.findFirst({
                where: {
                    id,
                    users: {
                        some: {
                            id: loggedInUser.id,
                        },
                    },
                },
            });

            if (!room) {
                return {
                    ok: false,
                    error: 'Room not exist.',
                };
            }

            return {
                ok: true,
                room,
            };
        }),
    },
};
