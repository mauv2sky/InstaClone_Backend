import { gql } from "apollo-server";

export default `
    type Query {
        searchUser(keyword: String!): [User]
    }
`