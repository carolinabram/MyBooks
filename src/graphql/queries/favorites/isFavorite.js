import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';

import { FavoriteType } from '../../types/favorites';

const queryIsFavorite = {

    type: FavoriteType,
    args: {
        book: {
            name: 'BOOK',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLString)
        }
    },
    resolve(root, params) {
        const favorite = Favorite.findBook({
            book: params.book
        }).exec();
        return favorite;
    }
}

export default queryIsFavorite;