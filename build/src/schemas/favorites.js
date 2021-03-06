'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var FavoritesSchema = new Schema({
    /* 'user': {
         type: Schema.Types.ObjectId,
         ref: 'users'
     },*/
    'book': {
        type: Schema.Types.ObjectId,
        ref: 'books'
    }
}, { collection: 'favorites', timestamps: true });

FavoritesSchema.methods.findBook = function findSimilarType(callback) {
    return this.model('Favorites').find({ book: this.book }, callback);
};

exports.default = _mongoose2.default.model('favorites', FavoritesSchema);