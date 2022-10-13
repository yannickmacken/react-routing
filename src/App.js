import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/welcome' element={<Welcome/>} /> 
      <Route path='/products' element={<Products/>} /> 
    </Routes>
    </div>
  );
}

export default App;
