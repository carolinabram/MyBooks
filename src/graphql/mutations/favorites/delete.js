import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';
import * as graphql from 'graphql';

export default {

    type: FavoriteType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params) {
        const deletedFavorite = Favorite.findByIdAndRemove(params.id).exec()
        if (!deletedFavorite) throw Error("Error on delete favorite")
        return deletedFavorite

    }


}