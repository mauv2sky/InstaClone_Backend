import { gql } from 'apollo-server';

export default gql`
    type Photo {
        id: Int!
        user: User!
        file: String!
        caption: String
        likes: Int!
        commentNumber: Int!
        comments: [Comment]
        isMine: Boolean!
        isLiked: Boolean!
        hashtags: [Hashtag]
        createdAt: String!
        updatedAt: String!
    }
    type Hashtag {
        id: Int!
        hashtag: String!
        photos(page: Int!): [Photo]
        totalPhotos: Int!
        createdAt: String!
        updatedAt: String!
    }
    type Like {
        id: Int!
        user: User!
        photo: Photo!
        createdAt: String!
        updatedAt: String!
    }
    type Comment {
        id: Int!
        user: User!
        photo: Photo!
        payload: String!
        isMine: Boolean!
        createdAt: String!
        updatedAt: String!
    }
`;
