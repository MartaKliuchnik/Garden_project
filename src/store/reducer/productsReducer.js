let defaultState = [];

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const PRISE_SEARCH_PRODUCTS = 'PRISE_SEARCH_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const WORD_SEARCH_PRODUCTS = 'WORD_SEARCH_PRODUCTS';
const CHECK_DICSOUNT_PRODUCTS = 'CHECK_DICSOUNT_PRODUCTS';
const RESET_PRODUCTS = 'RESET_PRODUCTS';

export const load_products_action = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const price_search_products_action = (payload) => ({ type: PRISE_SEARCH_PRODUCTS, payload }); 
export const sort_products_action = (payload) => ({ type: SORT_PRODUCTS, payload });
export const word_search_products_action = (payload) => ({ type: WORD_SEARCH_PRODUCTS, payload });
export const chech_discount_products_action = (payload) => ({ type: CHECK_DICSOUNT_PRODUCTS, payload });
export const reset_products_action = () => ({ type: RESET_PRODUCTS});

const checkDiscount = (payload, products) => {
    console.log(products);
    const { params, check_search } = payload;
    console.log(payload);
    if (!params && !check_search) {
        return [...products.map(product => {
            product.show_flg = true
            return product
        })]
    } else if (params && !check_search) {
        return [...products.map(product => {
            product.show_flg = product.discont_price !== 0
            return product
        })]
    } else if (params && check_search) {
        return [...products.map(product => {
            if (product.show_flg) {
                product.show_flg = product.discont_price !== 0
            }
            return product
        })]
    } else if (!params && check_search){
        return [...products.map(product => {
            if (product.show_flg) {
                product.show_flg = true
            }
            return product
        })]
    }
}

export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        state = action.payload.map(products => {
            return {
                ...products,
                show_flg: true
            }
        });
        defaultState = state;
        return [...state]

    } else if (action.type === PRISE_SEARCH_PRODUCTS) {
        const {params, check_search} = action.payload;
        if(!check_search){
            return [...state.map(products => {
                products.show_flg = products.discont_price >= params.minInput && products.discont_price <= params.maxInput
            return products 
            })]
        } else {
            return [...state.map(products => {
                if(products.show_flg){
                    products.show_flg = products.discont_price >= params.minInput && products.discont_price <= params.maxInput
                }
                return products
            })]
        }

    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 1) {
            return [...state.sort((a,b) => b.discont_price - a.discont_price)]
        } else if (action.payload === 2) {
            return [...state.sort((a, b) => a.discont_price - b.discont_price)]
        }

    } else if (action.type === WORD_SEARCH_PRODUCTS) {
        const {params, check_search} = action.payload;
        if (!check_search){
            return [...state.map(products => {
                products.show_flg = products.title.toLowerCase().startsWith(params);
            return products
            })]
        } else {
            return [...state.map(products => {
                if (products.show_flg) {
                    products.show_flg = products.title.toLowerCase().startsWith(params);
                }
                return products
            })]
        }

    } else if (action.type === CHECK_DICSOUNT_PRODUCTS) {
        return checkDiscount(action.payload, state)

    } else if (action.type === RESET_PRODUCTS) {
        return defaultState
    }
        
    else {
        return state
    }
}