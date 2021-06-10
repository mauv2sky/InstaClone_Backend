import { gql } from "apollo-server";

export default `
    type searchUserResult {
        ok: Boolean!
        error: String
        matchUser: [User]
    }
    type Query {
        searchUser(keyword: String!): searchUserResult!
    }
`