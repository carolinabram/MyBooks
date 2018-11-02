'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _books = require('../../../schemas/books');

var _books2 = _interopRequireDefault(_books);

var _favorites = require('../../types/favorites');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _favorites.FavoriteType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_favorites.FavoriteInputType)
        }
    },
    resolve: function resolve(root, params) {
        var favorite = new _books2.default(params.data);
        var newFavorite = favorite.save();
        if (!newFavorite) throw new Error("Problema al crear favorite");
        return newFavorite;
    }
};