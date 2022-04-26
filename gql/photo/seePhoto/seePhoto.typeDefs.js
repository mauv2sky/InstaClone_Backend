import { gql } from 'apollo-server';

export default gql`
    type seePhotoResult {
        ok: Boolean!
        error: String
        photo: Photo
    }

    type Query {
        seePhoto(id: Int!): seePhotoResult!
    }
`;
