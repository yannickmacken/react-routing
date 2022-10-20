import { Route, Routes, NavLink, Outlet } from 'react-router-dom'
import Products from './Products'

function Welcome() {
    return (
        <div>
            <h1>navigation bar</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Welcome