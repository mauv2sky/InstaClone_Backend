import client from '../../../client';

export default {
    Query: {
        seeComments: (_, { photoId, lastCmdId }) => {
            const comments = client.comment.findMany({
                where: {
                    photoId,
                },
                include: {
                    user: true,
                },
                skip: lastCmdId ? 1 : 0,
                take: 10,
                ...(lastCmdId && { cursor: { id: lastCmdId } }),
                orderBy: {
                    createdAt: 'asc',
                },
            });
            if (!comments) {
                return {
                    ok: false,
                    error: 'comments not exist.',
                };
            }

            return {
                ok: true,
                comments,
            };
        },
    },
};
