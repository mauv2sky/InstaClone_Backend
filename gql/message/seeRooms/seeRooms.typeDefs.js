import { gql } from 'apollo-server-express';

export default gql`
    type seeRoomsResult {
        rooms: [Room]
    }

    type Query {
        seeRooms: seeRoomsResult!
    }
`;
