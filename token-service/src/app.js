//Import Framrework / Libraries
import jwt from 'jsonwebtoken';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import 'dotenv/config';


//Import Application Specific Schemas,Resolvers and Models
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

console.log(process.env.SECRET);

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
	context: async ({ req }) => {
        return {
            models,
            secret: process.env.SECRET
        };
    }
});
   

server.applyMiddleware({ app, path: '/' });

app.use(cors());


app.listen({ port: 9000 }, () => {
    console.log('Apollo Server on http://localhost:9000');
});
