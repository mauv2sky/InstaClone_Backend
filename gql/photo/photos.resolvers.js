import client from '../../client';

export default {
    Photo: {
        user: ({ userId }) => {
            return client.user.findUnique({
                where: {
                    id: userId,
                },
            });
        },
        hashtags: ({ id }) => {
            return client.hashtag.findMany({
                where: {
                    photos: {
                        some: { id },
                    },
                },
            });
        },
        likes: ({ id }) => client.like.count({ where: { photoId: id } }),
        commentNumber: ({ id }) => client.comment.count({ where: { photoId: id } }),
        comments: ({ id }) =>
            client.comment.findMany({
                where: {
                    photoId: id,
                },
                include: {
                    user: true,
                },
            }),
        isMine: ({ userId }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            return userId === loggedInUser.id;
        },
        isLiked: async ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) return false;

            const ok = await client.like.findUnique({
                where: {
                    photoId_userId: {
                        photoId: id,
                        userId: loggedInUser.id,
                    },
                },
                select: {
                    id: true,
                },
            });

            if (!ok) return false;
            return true;
        },
    },
    Hashtag: {
        photos: ({ id }, { page }) => {
            return client.hashtag
                .findUnique({
                    where: {
                        id,
                    },
                })
                .photos();
        },
        totalPhotos: ({ id }) =>
            client.photo.count({
                where: {
                    hashtags: {
                        some: {
                            id,
                        },
                    },
                },
            }),
    },
    Comment: {
        isMine: ({ userId }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            return userId === loggedInUser.id;
        },
    },
};
