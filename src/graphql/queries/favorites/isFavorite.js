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
        const favorite = Favorite.findOne({
            where: {
                book: '5bdc54451751e9001679a4d9'
            }
        }).exec();
        return favorite;
    }
}

export default queryIsFavorite;