import { gql } from 'apollo-server-express';

export default gql`
    type seeCommentsResult {
        ok: Boolean!
        error: String
        comments: [Comment]
    }
    type Query {
        seeComments(photoId: Int!, lastCmdId: Int): seeCommentsResult!
    }
`;
