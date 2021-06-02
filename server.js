require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { getUser } from "./gql/user/users.utils";
import {typeDefs, resolvers} from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({req}) => {
    return {
      loggedInUser: await getUser(req.headers.token)
    }
  }
})

const PORT = process.env.PORT

server
  .listen(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}/ ✅`));