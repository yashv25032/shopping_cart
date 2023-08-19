import './App.css';
import Home from './Product/Home';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './Product/Cart';
import Navbar from './Product/Navbar';

function App() {

  return (
    <>
      <div className="App">
        
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </div>
    </>

  )


}



export default App;