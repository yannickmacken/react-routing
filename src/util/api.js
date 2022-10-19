async function getProducts() {
    const response = await fetch('https://react-products-database-default-rtdb.europe-west1.firebasedatabase.app/')
    if (!response.ok) {
        throw { message: 'Failed to fetch products', status: 500 }
    }
    return response.json
}

export default getProducts