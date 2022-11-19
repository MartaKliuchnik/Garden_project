export const get_all_categories = (callback) => {
    fetch('https://dummyjson.com/products')
        .then(responce => responce.json())
        .then(data => callback(data.products))
}

