import client from '../../../client';

export default {
    Query: {
        seePhotoLikes: async (_, { id }) => {
            const likes = await client.like.findMany({
                where: {
                    photoId: id,
                },
                select: {
                    user: true,
                },
            });

            if (!likes) {
                return {
                    ok: false,
                    error: 'likes not exist.',
                };
            }
            return {
                ok: true,
                users: likes.map((like) => like.user),
            };
        },
    },
};
