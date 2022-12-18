const read_local = () => JSON.parse(localStorage.getItem('show_products')) ?? [];
const save_local = (state) => localStorage.setItem('show_products', JSON.stringify(state));

let defaultState = [];
let showProducts = read_local();

const LOAD_FILTRATION_PRODUCTS = 'LOAD_FILTRATION_PRODUCTS';
const CHECK_DISCOUNT = 'CHECK_DISCOUNT';
const CHECK_SORT = 'CHECK_SORT';
const CHECK_PRICE = 'CHECK_PRICE';
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const load_products_for_filtration_action = (payload) => ({ type: LOAD_FILTRATION_PRODUCTS, payload });
export const load_all_products_for_filtration_action = () => ({ type: LOAD_ALL_PRODUCTS });
export const check_discount_action = (payload) => ({ type: CHECK_DISCOUNT, payload });
export const check_sort_action = (payload) => ({type: CHECK_SORT, payload});
export const check_price_action = (payload) => ({ type: CHECK_PRICE, payload });
export const search_product_action = (payload) => ({ type: SEARCH_PRODUCT, payload });

const checkDiscount = (check_discount, products) => {
    if (check_discount) {
        const result = showProducts.filter(product => product.discont_price === 0.75);
        products = [...products, ...result];
        save_local(products)
        return [...products]
    } else {
        const filter_products = products.filter(product => product.discont_price !== 0.75);
        save_local(filter_products);
        return [...filter_products]
    }
}

const checkSort = (value_sort, products) => {
    products = products.map(product => (product.discont_price === 0.75)
        ? { ...product, filtr_price: product.price }
        : { ...product, filtr_price: product.discont_price });
    
    if (value_sort === 1) {
        products = [...products.sort((a, b) => b.filtr_price - a.filtr_price)]
        save_local(products)
        return [...products]
    } else if (value_sort === 2) {
        products = [...products.sort((a, b) => a.filtr_price - b.filtr_price)];
        save_local(products)
        return [...products]
    }
}
    
const checkPrice = (sort_prices, products) => {
    let { to_price, from_price, change_prices } = sort_prices;
    to_price = (to_price === 0)
        ? defaultState.reduce((max, { price }) => max < price ? price : max, 0)
        : to_price;
    
    if (!change_prices) {
        showProducts = [...products.filter(product =>
            (((product.discont_price === 0.75) ? product.price : product.discont_price >= from_price) &&
                ((product.discont_price === 0.75) ? product.price : product.discont_price <= to_price))
                ? product
                : ''
        )]
        save_local(showProducts);
        return showProducts
    } else {
        products = defaultState;
        showProducts = [...products.filter(product =>
            (((product.discont_price === 0.75) ? product.price : product.discont_price >= from_price) &&
                ((product.discont_price === 0.75) ? product.price : product.discont_price <= to_price))
                ? product
                : ''
        )];
        save_local(showProducts);
        return showProducts
    }
}

const checkSearch = (search_value, products) => {
    const filteredProducts = products.filter(product => product.title.toLowerCase().startsWith(search_value));
    save_local(filteredProducts)
    return [...filteredProducts]
}

export const filterReducer = (state = defaultState, action) => {
    if (action.type === LOAD_FILTRATION_PRODUCTS) {
        defaultState = action.payload;
        showProducts = action.payload;
        save_local(showProducts);
        return [...showProducts]
    } else if (action.type === CHECK_DISCOUNT) {
        return checkDiscount(action.payload, state)
    } else if (action.type === CHECK_SORT) {
        return checkSort(action.payload, state)
    } else if (action.type === CHECK_PRICE) {
        return checkPrice(action.payload, state)
    } else if (action.type === LOAD_ALL_PRODUCTS) {
        save_local(defaultState)
        return defaultState
    } else if (action.type === SEARCH_PRODUCT) {
        return checkSearch(action.payload, state)
    } else {
        return state
    }
}