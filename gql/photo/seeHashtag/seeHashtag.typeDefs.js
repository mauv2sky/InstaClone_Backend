import { gql } from 'apollo-server';

export default gql`
    type seeHashtagResult {
        ok: Boolean!
        error: String
        hashTag: Hashtag
    }
    type Query {
        seeHashtag(hashtag: String!): seeHashtagResult!
    }
`;
