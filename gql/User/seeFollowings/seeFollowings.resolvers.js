import client from "../../../client"

export default {
    Query: {
        seeFollowings: (_, { userName, lastId }) =>
            // use cursor based pagination
            client.user
                .findUnique({ where: { userName } })
                .following({
                    take: 5,
                    skip: lastId ? 1 : 0,
                    ...(lastId && { cursor: { id: lastId } })
                })
    }
}