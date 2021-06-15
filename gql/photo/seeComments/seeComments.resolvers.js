import client from "../../../client"

export default {
    Query: {
        seeComments: (_, { photoId, lastCmdId }) =>
            client.comment.findMany({
                where: {
                    photoId
                },
                include: {
                    user: true
                },
                skip: lastCmdId ? 1 : 0,
                take: 10,
                ...(lastCmdId && { cursor: { id: lastCmdId } }),
                orderBy: {
                    createdAt: "asc"
                }
            })
    }
}