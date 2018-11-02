import Users from './users';
import Categories from './categories';
import Books from './books';
import Favorites from './favorites';


export default {
    ...Users,
    ...Categories,
    ...Books,
    ...Favorites
}