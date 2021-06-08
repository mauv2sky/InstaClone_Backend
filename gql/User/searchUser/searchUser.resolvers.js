import client from "../../../client"

export default {
    Query: {
        searchUser: async (_, {keyword, lastId}) => {
            return await client.user.findMany({
                where: {
                    userName: {
                        startsWith: keyword
                    }
                },
                skip: lastId ? 1 : 0,
                take: 5,
                ...(lastId && {cursor: {id: lastId}})
            })
        }
    }
}