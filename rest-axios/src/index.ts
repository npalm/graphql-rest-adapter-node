import { ApolloServer, gql } from 'apollo-server';
import { RootSchema } from './schema/RootSchema';
import { TalkResolver } from './resolvers/talkResolver'

const main = async () => {
  const server = await new ApolloServer({ typeDefs: RootSchema, resolvers: TalkResolver }).listen();
  console.log(`🏄🏽‍♀️ Server started at: ${server.url} 🏄🏽‍♀️`);
};

main();

process.on('SIGINT', () => {
  process.exit(1);
});
