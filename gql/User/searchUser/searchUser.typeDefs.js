import { gql } from "apollo-server";

export default gql`
    type searchUserResult {
        ok: Boolean!
        error: String
        matchUser: [User]
    }
    type Query {
        searchUser(keyword: String!): searchUserResult!
    }
`