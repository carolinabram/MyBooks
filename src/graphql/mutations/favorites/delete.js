import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';
import * as graphql from 'graphql';

export default {

    type: FavoriteType,
    args: {
        user: {
            name: 'data',
            type:new graphql.GraphQLNonNull(graphql.GraphQLObjectType)
        }
    },
    resolve(root, params) {
        if (params.user) {
            const fav = usersArray.find(fav => fav.user === params.user)
            return fav // Schema is expecting an array
        }
        throw Error("Error on delete favorite"+params)
/*const deletedFavorite = Favorite.find(params).exec()
        //const deletedFavorite = Favorite.ffindByIdAndRemove(params.id).exec()
        if (!deletedFavorite) throw Error("Error on delete favorite")
        return deletedFavorite*/

    }


}