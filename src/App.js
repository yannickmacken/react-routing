import { Route, NavLink } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail'
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li><NavLink to='/welcome'>Welcome</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
      </ul>
      <Routes>
        <Route path='/welcome' element={<Welcome/>} /> 
        <Route path='/products' element={<Products/>} /> 
        <Route path='/product-detail/:productId' element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
