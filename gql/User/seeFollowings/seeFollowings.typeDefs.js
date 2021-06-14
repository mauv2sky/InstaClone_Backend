import { gql } from "apollo-server"

export default gql`
    type Query {
        seeFollowings(userName: String!, lastId: Int): [User]
    }
`