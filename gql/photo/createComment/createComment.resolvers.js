import client from '../../../client';
import { protectedResolver } from '../../user/users.utils';

export default {
    Mutation: {
        createComment: protectedResolver(async (_, { photoId, payload }, { loggedInUser }) => {
            const photo = await client.photo.findUnique({
                where: {
                    id: photoId,
                },
                select: {
                    id: true,
                },
            });
            if (!photo) {
                return {
                    ok: false,
                    error: 'Photo not found.',
                };
            }
            const comment = await client.comment.create({
                data: {
                    payload,
                    photo: {
                        connect: {
                            id: photoId,
                        },
                    },
                    user: {
                        connect: {
                            id: loggedInUser.id,
                        },
                    },
                },
            });

            if (!comment) {
                return {
                    ok: false,
                    error: 'comment not exist.',
                };
            }
            return {
                ok: true,
                id: comment.id,
            };
        }),
    },
};
