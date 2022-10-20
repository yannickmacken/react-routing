import { useNavigate, useLocation, useLoaderData, Link, Await, defer } from 'react-router-dom'
import { Suspense, useState } from 'react'
import getProducts from '../util/api'

function Products() {

    const loaderData = useLoaderData()
    let navigate = useNavigate()
    const location = useLocation()
    const [ products, setProducts] = useState([ '/products/1', '/products/2' ])

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
            <Suspense fallback={<p>loading...</p>}>
            <Await 
                resolve={loaderData.posts} 
                errorElement={<p>error loading content.</p>}
            >
                {(loaderData) => <p>loaded.</p>}
            </Await>
            </Suspense>
        </div>
    )
}

function productLoader() {
    return defer({ posts: getProducts()})
}

export default Products
export {productLoader}