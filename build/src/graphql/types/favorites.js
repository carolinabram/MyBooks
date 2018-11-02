'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FavoriteInputType = exports.FavoriteType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _books = require('./books');

var _books2 = require('../../schemas/books');

var _books3 = _interopRequireDefault(_books2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var FavoriteType = exports.FavoriteType = new GRAPHQL.GraphQLObjectType({
    name: "Favorites",
    description: "favoritos",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },

            user: {
                type: _books.BookType,
                resolve: function resolve(favorite) {
                    var user = favorite.user;

                    return _books3.default.findById(user).exec();
                }
            }
        };
    }
});

var FavoriteInputType = exports.FavoriteInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addFavorite',
    description: "Add favorite Book",
    fields: function fields() {
        return {
            book: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});