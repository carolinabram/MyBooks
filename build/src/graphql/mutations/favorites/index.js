'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addFavorite: _add2.default,
    deleteFavorite: _delete2.default
};