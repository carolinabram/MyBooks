import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const FavoritesSchema = new Schema({
   /* 'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },*/
    'books': {
        type: Schema.Types.ObjectId,
        ref: 'books'
    }
},{collection: 'favorites', timestamps: true});

export default mongoose.model('favorites', FavoritesSchema);