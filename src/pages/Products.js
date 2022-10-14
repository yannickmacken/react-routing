import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h1>Products component text</h1>
            <ul>
                <Link to={'/products/1'}>Product 1</Link>
                <Link to={'/products/2'}>Product 2</Link>
            </ul>
        </div>
    )
}

export default Products