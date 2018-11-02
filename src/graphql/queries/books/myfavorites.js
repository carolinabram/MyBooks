import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';

const queryMyFavorites = {
    type: new GRAPHQL.GraphQLList(FavoriteType),
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root, params) {
        const favorites = Favorite.find(params.args).exec()
       // const favorites = Book.findById(params.id).exec()
        return favorites
    }
}

export default queryMyFavorites;