import { loadFilesSync,mergeResolvers,mergeTypeDefs,makeExecutableSchema } from "graphql-tools";

const loadedTypeDefs = loadFilesSync(`${__dirname}/gql/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/gql/**/*.{queries,mutations}.js`)

const typeDefs = mergeTypeDefs(loadedTypeDefs)
const resolvers = mergeResolvers(loadedResolvers)

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema