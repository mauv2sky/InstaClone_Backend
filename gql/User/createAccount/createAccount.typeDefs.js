import { gql } from 'apollo-server'

export default gql`
    type Mutation {
        createAccountResult(
            ok: Boolean!
            error: String
        )
        createAccount(
            firstName: String!
            lastName: String
            userName: String!
            email: String!
            password: String!
        ): User!
    }
`