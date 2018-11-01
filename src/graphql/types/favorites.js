import * as GRAPHQL from 'graphql';

import { UserType } from './users';
import User from '../../schemas/users';

import { BookType } from './books';
import Book from '../../schemas/books';

export const FavoriteType = new GRAPHQL.GraphQLObjectType({
    name: 'Favorite',
    description: 'Types of Favorite',
    fields : () => ({
        _id:{
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        user: {
            type: UserType,
            resolve(favorite){
                const {user} = favorite
                return User.findById(user).exec()
            }
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