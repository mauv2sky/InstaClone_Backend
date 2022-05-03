import client from '../../../client';
import { protectedResolver } from '../../user/users.utils';

export default {
    Query: {
        seeFeed: protectedResolver(async (_, __, { loggedInUser }) => {
            const photos = await client.photo.findMany({
                where: {
                    OR: [
                        {
                            user: {
                                follower: {
                                    some: {
                                        id: loggedInUser.id,
                                    },
                                },
                            },
                        },
                        {
                            userId: loggedInUser.id,
                        },
                    ],
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            if (!photos) {
                return {
                    ok: false,
                    error: "doesn't following someone.",
                };
            }

            return {
                ok: true,
                photos,
            };
        }),
    },
};
