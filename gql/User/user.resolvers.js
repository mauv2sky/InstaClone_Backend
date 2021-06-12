import client from "../../client"

export default {
    User: {
        totalFollowing: ({ id }) => {
            return client.user.count({
                where: {
                    follower: {
                        some: { id }
                    }
                }
            })
        },
        totalFollower: ({ id }) => {
            return client.user.count({
                where: {
                    following: {
                        some: { id }
                    }
                }
            })
        },
        isMe: ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            return id === loggedInUser.id;
        },
        isFollowing: async ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            const exist = await client.user
                .count({
                    where: {
                        userName: loggedInUser.userName,
                        following: {
                            some: { id }
                        }
                    },
                })
            return Boolean(exist);
        },
        photos: ({ id }) => client.user.findUnique({
            where: {
                id
            }
        }).photos()
    }
}