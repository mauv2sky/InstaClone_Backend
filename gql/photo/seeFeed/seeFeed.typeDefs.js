import { gql } from 'apollo-server-express';

export default gql`
    type seeFeedResult {
        ok: Boolean!
        error: String
        photos: [Photo]
    }
    type Query {
        seeFeed: seeFeedResult!
    }
`;
