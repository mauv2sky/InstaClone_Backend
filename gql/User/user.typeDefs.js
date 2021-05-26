import { gql } from 'apollo-server'

export default gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String
        userName: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    },
    type loginResult {
        ok: Boolean!
        error: String
        token: String
    },
    type editProfileResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String
            userName: String!
            email: String!
            password: String!
        ): User,
        login(
            userName: String!
            password: String!
        ): loginResult!,
        editProfile(
            firstName: String
            lastName: String
            userName: String
            email: String
            password: String
        ): editProfileResult!
    },
    type Query {
        seeProfile(userName: String!): User
    }
`