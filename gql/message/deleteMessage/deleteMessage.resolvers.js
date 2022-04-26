import client from '../../../client';
import { protectedResolver } from '../../user/users.utils';

export default {
    Mutation: {
        deleteMessage: protectedResolver(async (_, { id }, { loggedInUser }) => {
            const message = await client.message.findUnique({
                where: {
                    id,
                },
            });

            if (!message) {
                return {
                    ok: false,
                    error: 'message not found.',
                };
            } else if (message.userId !== loggedInUser.id) {
                return {
                    ok: false,
                    error: 'Not authorized.',
                };
            }

            await client.message.delete({
                where: {
                    id,
                },
            });

            return {
                ok: true,
            };
        }),
    },
};
