let defaultState = [];

const LOAD_FILTRATION_PRODUCTS = 'LOAD_FILTRATION_PRODUCTS';
const CHECK_DISCOUNT = 'CHECK_DISCOUNT';
const CHECK_SORT = 'CHECK_SORT';
const CHECK_PRICE = 'CHECK_PRICE';
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';

export const load_products_for_filtration_action = (payload) => ({ type: LOAD_FILTRATION_PRODUCTS, payload });
export const load_all_products_for_filtration_action = () => ({ type: LOAD_ALL_PRODUCTS });
export const check_discount_action = (payload) => ({ type: CHECK_DISCOUNT, payload });
export const check_sort_action = (payload) => ({type: CHECK_SORT, payload});
export const check_price_action = (payload) => ({type: CHECK_PRICE, payload});

const checkDiscount = (check_discount, products) => {
    if (check_discount) {
        const result = defaultState.filter(product => product.discont_price === 0.75);
        return [...products, ...result]
    } else {
        const filter_products = products.filter(product => product.discont_price !== 0.75);
        return [...filter_products]
    }
}

const checkSort = (value_sort, products) => {
    products = products.map(product => (product.discont_price === 0.75)
        ? { ...product, filtr_price: product.price }
        : { ...product, filtr_price: product.discont_price });
    
        if (value_sort === 1) {
            return [...products.sort((a, b) => b.filtr_price - a.filtr_price)]
        } else if (value_sort === 2) {
            return [...products.sort((a, b) => a.filtr_price - b.filtr_price)]
        }
}
    
const checkPrice = (sort_prices, products) => {
    let { to_price, from_price, change_prices } = sort_prices;
    console.log(from_price);
    console.log(to_price);
    console.log(change_prices);

    to_price = (to_price === 0)
        ? products.reduce((max, { price }) => max < price ? price : max, 0)
        : to_price;
    
    if (!change_prices) {
        return [...products.filter(product =>
            (((product.discont_price === 0.75) ? product.price : product.discont_price >= from_price) &&
                ((product.discont_price === 0.75) ? product.price : product.discont_price <= to_price))
                ? product
                : ''
        )]
    } else {
        products = defaultState;
        return [...products.filter(product =>
            (((product.discont_price === 0.75) ? product.price : product.discont_price >= from_price) &&
                ((product.discont_price === 0.75) ? product.price : product.discont_price <= to_price))
                ? product
                : ''
        )]
    }
}

export const filterReducer = (state = defaultState, action) => {
    if (action.type === LOAD_FILTRATION_PRODUCTS) {
        defaultState = action.payload;
        return defaultState
    } else if (action.type === CHECK_DISCOUNT) {
        return checkDiscount(action.payload, state)
    } else if (action.type === CHECK_SORT) {
        return checkSort(action.payload, state)
    } else if (action.type === CHECK_PRICE) {
        return checkPrice(action.payload, state)
    } else if (action.type === LOAD_ALL_PRODUCTS) {
        return [...defaultState]
    }
    else {
        return state
    }
}