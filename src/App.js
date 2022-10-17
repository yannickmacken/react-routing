import { Route, NavLink, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li><NavLink to='/welcome'>Welcome</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Navigate to="/welcome"/>} />
        <Route path='/welcome/*' element={<Welcome/>} /> 
        <Route path='/products' element={<Products/>} /> 
        <Route path='/products/:productId' element={<ProductDetail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
