export const get_all_products = (callback) => {
    fetch('http://localhost:3333/products/all')
        .then(response => response.json())
        .then(products => callback(products))
}