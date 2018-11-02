import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';

import { FavoriteType } from '../../types/favorites';

const queryIsFavorite = {

    type: FavoriteType,
    args: {
        book: {
            name: 'book',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLString)
        }
    },
    resolve(root, params) {
        const favorite = Favorite.find({
            book: params.book,
        }).exec();
        return favorite;
    }
}

export default queryIsFavorite;