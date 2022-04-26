import { gql } from 'apollo-server-express';

export default gql`
    type seePhotoLikesResult {
        ok: Boolean!
        error: String
        users: [User]
    }

    type Query {
        seePhotoLikes(id: Int!): seePhotoLikesResult!
    }
`;
