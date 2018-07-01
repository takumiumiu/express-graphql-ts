import { BooksQuery } from "./queries/books.query";
import { GraphQLSchema, GraphQLObjectType } from "graphql";

class Query {
    public name = "BookSchema";
    public description = "Application Schema Query Root";

    public fields = function () {
        return {
            books: new BooksQuery()
        }
    }
}

export const schema = new GraphQLSchema({
    query : new GraphQLObjectType(new Query())
});