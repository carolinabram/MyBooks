import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const FavoritesSchema = new Schema({
   /* 'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },*/
    'book': {
        type: Schema.Types.ObjectId,
        ref: 'books'
    }
},{collection: 'favorites', timestamps: true});

FavoritesSchema.methods.findBook = function findSimilarType(callback) {
    return this.model('Favorites').find({ book: this.book }, callback);
};

export default mongoose.model('favorites', FavoritesSchema);