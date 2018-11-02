import Favorite from '../../../schemas/favorites';
import { FavoriteType, FavoriteDeleteInputType  } from '../../types/favorites';
import * as graphql from 'graphql';

export default {

    type: FavoriteType,
    args: {
        book: {
            name: 'data',
            type: new graphql.GraphQLNonNull(FavoriteDeleteInputType )
        }
    },
    resolve(root, params) {
            const fav = Favorite.find(fav => fav.book === params.book)
            return fav
    }

}