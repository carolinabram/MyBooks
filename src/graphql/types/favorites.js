import * as GRAPHQL from 'graphql';

import { BookType } from './books';
import Book from '../../schemas/books';

export const FavoriteType = new GRAPHQL.GraphQLObjectType({
    name: "Favorites",
    description: "favoritos",
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
    
        book: {
            type: BookType,
            resolve(favorite) {
                const { book } = favorite
                return Book.findById(book).exec()
            }
        }
    })
})

export const FavoriteInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addFavorite',
    description: "Add favorite Book",
    fields: () => ({
        book: {
            type: GRAPHQL.GraphQLString
        }
    })
})

export const FavoriteDeleteInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'deleteFavorite',
    description: "delete favorite Book",
    fields: () => ({
        book: {
            type: GRAPHQL.GraphQLString
        }
    })
})