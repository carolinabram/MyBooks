import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';
import * as graphql from 'graphql';

export default {

    type: FavoriteType,
    args: {
        user: {
            name: 'data',
            type: new graphql.GraphQLNonNull(FavoriteType)
        }
    },
    resolve(root, params) {
        const deletedFavorite = Favorite.find(args).exec()
        //const deletedFavorite = Favorite.ffindByIdAndRemove(params.id).exec()
        if (!deletedFavorite) throw Error("Error on delete favorite")
        return deletedFavorite

    }


}