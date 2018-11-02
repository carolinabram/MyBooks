import Favorite from '../../../schemas/books';
import { FavoriteType, FavoriteInputType } from '../../types/favorites';
import * as graphql from 'graphql';


export default {

    type: FavoriteType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(FavoriteInputType)
        }
    },
    resolve(root, params) {
        const favorite = new Favorite(params.data)
        const newFavorite = favorite.save();
        if (!newFavorite) throw new Error("Problema al crear favorite")
        return newFavorite
    }


}