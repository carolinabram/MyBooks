'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFavorite = require('./isFavorite');

var _isFavorite2 = _interopRequireDefault(_isFavorite);

var _myFavorites = require('./myFavorites');

var _myFavorites2 = _interopRequireDefault(_myFavorites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    isFavorite: _isFavorite2.default,
    myFavorites: _myFavorites2.default
};