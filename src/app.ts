import * as express from 'express';
import * as GraphQLHTTP from 'express-graphql';
import { Server } from 'http';
import { schema } from './graphql/schema'

class App {

    public express: express.Application;
    public server: Server;
    public port = process.env.PORT || 3000;

    constructor() {

        this.express = express();

        this.server = this.express.listen(this.port);

        this.graphql();

    }

    private graphql() {
        this.express.use('/graphql', GraphQLHTTP({
            schema: schema,
            graphiql: false,
        }));

        this.express.use('/graphiql', GraphQLHTTP({
            schema: schema,
            graphiql: true,
        }));
    }
}

export default new App();