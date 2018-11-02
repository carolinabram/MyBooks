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
    
        user: {
            type: BookType,
            resolve(favorite) {
                const { user } = favorite
                return Book.findById(user).exec()
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