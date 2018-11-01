'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FavoriteInputType = exports.FavoritesType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _users = require('./users');

var _books = require('./books');

var _users2 = require('../../schemas/users');

var _users3 = _interopRequireDefault(_users2);

var _books2 = require('../../schemas/books');

var _books3 = _interopRequireDefault(_books2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var FavoritesType = exports.FavoritesType = new GRAPHQL.GraphQLObjectType({
    name: 'Favorites',
    description: 'Types of Favorites',
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(favorite) {
                    var user = favorite.user;

                    return _users3.default.findById(user).exec();
                }
            },
            book: {
                type: _books.BookType,
                resolve: function resolve(favorite) {
                    var book = favorite.book;

                    return _books3.default.findById(book).exec();
                }
            }
        };
    }
});

var FavoriteInputType = exports.FavoriteInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addFavorite',
    description: 'Add favorite Book',
    fields: function fields() {
        return {
            user: {
                type: GRAPHQL.GraphQLString
            },
            book: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});