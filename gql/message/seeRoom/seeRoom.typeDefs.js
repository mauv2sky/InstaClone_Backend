import { gql } from 'apollo-server-express';

export default gql`
    type seeRoomResult {
        ok: Boolean!
        error: String
        room: Room
    }
    type Query {
        seeRoom(id: Int!): seeRoomResult!
    }
`;
