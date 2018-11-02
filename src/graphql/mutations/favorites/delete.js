import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';
import { BookType } from '../../types/books';
import * as graphql from 'graphql';

export default {

    type: FavoriteType,
    args: {
        user: {
            name: 'data',
            type: BookType,
        }
    },
    resolve(root, params) {
            const fav = Favorite.find(fav => fav.user === params.user)
            return fav // Schema is expecting an array
    }

}