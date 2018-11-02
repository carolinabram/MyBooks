import * as GRAPHQL from 'graphql';

import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';


const queryMyFavorites = {
    type : new GRAPHQL.GraphQLList(FavoriteType),
    resolve(){
        const favorites = Favorite.find().exec()
        if(!favorites) throw new Error("Error at fetching favorites");
        return favorites
    }
}

export default queryMyFavorites;