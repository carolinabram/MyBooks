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

var queryMyFavorites = {
    type: new GRAPHQL.GraphQLList(_favorites3.FavoriteType),
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var favorites = _favorites2.default.find(params.args).exec();
        // const favorites = Book.findById(params.id).exec()
        return favorites;
    }
};

exports.default = queryMyFavorites;