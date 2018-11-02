import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';

import { FavoriteType } from '../../types/favorites';

const queryIsFavorite = {

    type: FavoriteType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root, params) {
        const favorite = Favorite.findById(params.id).exec()
        if (!favorite) return false;
        return true;
    }
}

export default queryIsFavorite;