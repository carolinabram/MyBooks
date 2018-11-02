'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _favorites = require('../../../schemas/favorites');

var _favorites2 = _interopRequireDefault(_favorites);

var _favorites3 = require('../../types/favorites');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _favorites3.FavoriteType,
    args: {
        book: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_favorites3.FavoriteDeleteInputType)
        }
    },
    resolve: function resolve(root, params) {
        var fav = _favorites2.default.find(function (fav) {
            return fav.book === params.book;
        });
        return fav;
    }
};