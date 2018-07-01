import { GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLObjectType } from "graphql";

class Book {
    public name = "Book";
    public description = "This represent Book";
    
    //{ title: String, author: String }
    public fields = function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            title: {
                type: GraphQLString
            },
            author: {
                type: GraphQLString
            }

        }
    }
}

export const BookType = new GraphQLObjectType(new Book());