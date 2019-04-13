//Import Framework / Libraries
import express from 'express';
import { ApolloServer, } from 'apollo-server-express';
import cors from 'cors';
import 'dotenv/config';


//Import Application Specific Schemas,Resolvers and Models
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

console.log('resolvers:' + resolvers);
console.log('schema:' + schema);


const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async ({ req }) => {
        const me = 'test';
       // console.log(' in context me is:' + me);
        return {
            models,
            me
        };
    }
});

server.applyMiddleware({ app, path: '/' });
app.use(cors());
app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000');
});
