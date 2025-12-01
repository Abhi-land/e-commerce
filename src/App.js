import logo from './logo.svg';
import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import { Product } from './customer/components/Product/Product';
import Footer from './customer/components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './customer/components/ProductDetail/ProductDetail';



function App() {
  return (
    <div >
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product />} />
          </Routes>
        </BrowserRouter> */}
        <ProductDetail />
      </div>
      <Footer />

    </div>
  );
}

export default App;
