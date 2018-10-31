import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const BooksSchema = new Schema({

    'name' : {
        type: String,
        require: true
    },
    'description': {
        type: String
    },
    'year': {
        type: Number
    },
    'author': {
        type: String,
    },
    'rank': {
        type: [Number]
    },
    'ratings': {
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'pages': {
        type: String,
    },
    'image': {
        type: String
    },
    'category': {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
},{collection: 'books', timestamps: true});

export default mongoose.model('books', MoviesSchema);