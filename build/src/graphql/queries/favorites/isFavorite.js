'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _favorites = require('../../../schemas/favorites');

var _favorites2 = _interopRequireDefault(_favorites);

var _favorites3 = require('../../types/favorites');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryIsFavorite = {

    type: _favorites3.FavoriteType,
    args: {
        book: {
            name: 'book',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLString)
        }
    },
    resolve: function resolve(root, params) {
        var favorite = _favorites2.default.findOne({
            where: {
                book: params.book
            }
        }).exec();
        return favorite;
    }
};

exports.default = queryIsFavorite;