import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { AppDataSource } from './data-source';
import { typeDefs } from './schema';
import { resolvers } from './resolver';


AppDataSource.initialize().then(() => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch(error => console.log(error));
