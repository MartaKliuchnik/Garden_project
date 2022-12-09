import { createStore, combineReducers, applyMiddleware } from 'redux';
import { basketReducer } from './reducer/basketReducer';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { descriptionReducer } from './reducer/descriptionReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: descriptionReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));