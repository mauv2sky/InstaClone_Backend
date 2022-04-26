import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";

const loadedTypeDefs = loadFilesSync(`${__dirname}/gql/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/gql/**/*.resolvers.js`)

export const typeDefs = mergeTypeDefs(loadedTypeDefs)
export const resolvers = mergeResolvers(loadedResolvers)