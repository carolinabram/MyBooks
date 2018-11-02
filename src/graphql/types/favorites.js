import * as GRAPHQL from 'graphql';

import { BookType } from './books';
import Book from '../../schemas/books';

export const FavoritesType = new GRAPHQL.GraphQLObjectType({
    name: 'Favorites',
    description: 'Types of Books',
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
export const FavoritesInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddFavorite',
    description: 'libros favoritos',
    fields: () => ({
        book: {
            type: GRAPHQL.GraphQLString
        }
    })
})
