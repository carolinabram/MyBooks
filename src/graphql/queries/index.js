import users from './users';
import categories from './categories';
import books from './books';
import favorites from './favorites';


export default {
    ...users,
    ...categories,
    ...books,
    ...favorites
}