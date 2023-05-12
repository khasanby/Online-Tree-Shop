import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TreeSorts from './components/TreeSortDetails/TreeSorts';
import TreeMoreInfo from './components/TreeMoreDetail/TreeMoreInfo';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
      <ShopContextProvider>
        <Router>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" />
            <Route exact path="/about" />
            <Route exact path="/tree-types/:typeid" element={<TreeSorts />} />
            <Route exact path="/tree-types/:typeid/tree/:treeid" element={<TreeMoreInfo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
