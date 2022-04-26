import { gql } from 'apollo-server-express';

export default gql`
    type searchPhotosResult {
        ok: Boolean!
        error: String
        photos: [Photo]
    }
    type Query {
        searchPhotos(keyword: String!): searchPhotosResult!
    }
`;
