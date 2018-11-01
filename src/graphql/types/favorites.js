import * as GRAPHQL from 'graphql';

import { UserType } from './users';
import { BookType } from './books';

import User from '../../schemas/users';
import Book from '../../schemas/books';

export const FavoritesType = new GRAPHQL.GraphQLObjectType({
    name: 'Favorites',
    description: 'Types of Favorites',
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        user: {
            type: UserType,
            resolve(favorite) {
                const { user } = favorite
                return User.findById(user).exec()
            }
        },
        book: {
            type: BookType,
            resolve(favorite) {
                const { book } = favorite
                return Book.findById(user).exec()
            }
        }
    })
})

export const FavoriteInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addFavorite',
    description: 'Add favorite to Book',
    fields: () => ({
        user: {
            type: GRAPHQL.GraphQLString
        },
        book: {
            type: GRAPHQL.GraphQLString
        }
    })
})