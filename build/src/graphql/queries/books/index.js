'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _favorites = require('./favorites');

var _favorites2 = _interopRequireDefault(_favorites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    allBooks: _all2.default,
    singleBook: _single2.default,
    favorites: _favorites2.default
};