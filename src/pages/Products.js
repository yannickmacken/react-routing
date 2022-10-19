import { useNavigate, useLocation, useLoaderData, Link } from 'react-router-dom'
import { useState } from 'react'

function Products() {

    const loaderData = useLoaderData()
    let navigate = useNavigate()
    const location = useLocation()
    const [ products, setProducts] = useState([ '/products/1', '/products/2' ])

    console.log(loaderData)

    // Get current URL query params
    const queryParams = new URLSearchParams(location.search)
    const isSortingAscending = queryParams.get('sort') === 'asc'
    
    // Sort products on basis of URL query params
    function onClickHandler() {
        if (isSortingAscending) {
            navigate('/products?sort=desc')
            setProducts(a => a.sort())
        }
        else {
            navigate('/products?sort=asc')
            setProducts(a => a.sort().reverse())
        }
    } 

    // Dynamically build sorted link list
    let links = []
    for (let [index, productName] of products.entries()) {
        links.push(<li key={index}><Link to={productName}>{productName}</Link></li>)
    }

    return (
        <div>
            <h1>Products component text</h1>
            <br/>
            <button onClick={onClickHandler}>Sort</button>
            <br/>
            <ul>
            {links}
            </ul>
        </div>
    )
}

export default Products