import { gql } from 'apollo-server-express';

export default gql`
    type editCommentResult {
        ok: Boolean!
        error: String
        comment: Comment
    }
    type Mutation {
        editComment(id: Int!, payload: String!): editCommentResult!
    }
`;
