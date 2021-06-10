import client from "../../../client"

export default {
    Query: {
        searchUser: async (_, { keyword, lastId }) => {
            const matchUser = await client.user.findMany({
                where: {
                    userName: {
                        startsWith: keyword
                    }
                },
                skip: lastId ? 1 : 0,
                take: 5,
                ...(lastId && { cursor: { id: lastId } })
            })
            if (matchUser.length == 0) {
                return {
                    ok: false,
                    error: "No results were found for your search."
                }
            }
            return {
                ok: true,
                matchUser
            }
        }
    }
}