import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';

import { FavoriteType } from '../../types/favorites';

const queryIsFavorite = {

    type: FavoriteType,
    args: {
        user: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLString)
        }
    },
    resolve(root, params) {
        const favorite = Favorite.findById(params.user).exec()
        if (!favorite) return false;
        return true;
    }
}

export default queryIsFavorite;