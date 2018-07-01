import { GraphQLQuery } from "./abstract.query";
import { GraphQLList } from "graphql";
import { BookType } from "../types";

const books = [
    {
        id:1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id:2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
]

export class BooksQuery implements GraphQLQuery {
    public type = new GraphQLList(BookType);

    public description: "List of all Books";

    public resolve = function () {
        return books
    }
}