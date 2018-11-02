'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _myfavorites = require('./myfavorites');

var _myfavorites2 = _interopRequireDefault(_myfavorites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    allBooks: _all2.default,
    singleBook: _single2.default,
    myFavorites: _myfavorites2.default
};