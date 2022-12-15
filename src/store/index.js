import { createStore, combineReducers, applyMiddleware } from 'redux';
import { basketReducer } from './reducer/basketReducer';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { descriptionReducer } from './reducer/descriptionReducer';
import { filterReducer } from './reducer/filterReducer';
import { promotionsReducer } from './reducer/promotionsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: descriptionReducer,
    filtration: filterReducer,
    promotions: promotionsReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));