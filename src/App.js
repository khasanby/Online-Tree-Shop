import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import TreeDetails from './components/TreeDetails/TreeDetails';
import TreeMoreInfo from './components/TreeMoreDetail/TreeMoreInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" />
          <Route exact path="/about" />
          <Route exact path="/tree-types/:typeid" element={<TreeDetails />} />
          <Route exact path="/tree-types/:typeid/tree/:treeid" element={<TreeMoreInfo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
