import { gql } from 'apollo-server'

export default gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String
        userName: String!
        email: String!
        bio: String
        avatar: String
        createdAt: String!
        updatedAt: String!
        following: [User]
        follower: [User]
        photos: [Photo]
        totalFollowing: Int!
        totalFollower: Int!
        isMe: Boolean!
        isFollowing: Boolean!
    }
`