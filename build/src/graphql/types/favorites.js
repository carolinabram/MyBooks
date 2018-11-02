'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FavoritesInputType = exports.FavoritesType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _books = require('./books');

var _books2 = require('../../schemas/books');

var _books3 = _interopRequireDefault(_books2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var FavoritesType = exports.FavoritesType = new GRAPHQL.GraphQLObjectType({
    name: 'Favorites',
    description: 'Types of Books',
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
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
var FavoritesInputType = exports.FavoritesInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddFavorite',
    description: 'libros favoritos',
    fields: function fields() {
        return {
            book: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});