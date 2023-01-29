import { createStore, combineReducers, applyMiddleware } from 'redux';
import { basketReducer } from './reducer/basketReducer';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { descriptionReducer } from './reducer/descriptionReducer';
import { promotionsReducer } from './reducer/promotionsReducer';
import { promotionsRandomReducer } from './reducer/randomPromotionsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: descriptionReducer,
    promotions: promotionsReducer,
    randomPromotions: promotionsRandomReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));