async function getProducts() {
    const response = await fetch(
      'https://react-movie-database-1311e-default-rtdb.europe-west1.firebasedatabase.app/movies.json', 
      {
        method: "GET",
        headers: {
          'Content-type': 'application/json'
        }
      })
    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await response.json()
    return data
}

export default getProducts