require("dotenv").config();
import http from 'http';
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { getUser } from "./gql/user/users.utils";
import { typeDefs, resolvers } from "./schema";
import { graphql } from "graphql";
import { graphqlUploadExpress } from 'graphql-upload';

const PORT = process.env.PORT

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: async ({ req }) => {
    if (req) {
      return {
        loggedInUser: await getUser(req.headers.token)
      }
    }
  }
})

const app = express();

app.use(graphqlUploadExpress());
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}/graphql ✅`);
});