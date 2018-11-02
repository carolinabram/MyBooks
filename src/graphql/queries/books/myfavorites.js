import * as GRAPHQL from 'graphql';

import { UserType } from '../../types/users';

import Favorite from '../../../schemas/favorites';
import { FavoriteType } from '../../types/favorites';

const queryMyFavorites = {
    type: new GRAPHQL.GraphQLList(FavoriteType),
    resolve() {
        const favorites = Favorite.find().exec()
        if (!favorites) throw new Error("Error at fetching favorites");
        return favorites
    }
   /* type: new GRAPHQL.GraphQLList(FavoriteType),
    args: {
        user: {
            name: 'user',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLObjectType)
        }
    },
    resolve(root, params) {
        const favorites = Favorite.find(params.args).exec()
        console.log('favoritos'+favorites);
       // const favorites = Book.findById(params.id).exec()
        return favorites
    }*/
}

export default queryMyFavorites;