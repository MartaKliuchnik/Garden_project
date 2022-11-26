export const get_all_categories = (callback) => {
    fetch('http://localhost:3333/categories/all')
        .then(responce => responce.json())
        .then(data => callback(data))
}
