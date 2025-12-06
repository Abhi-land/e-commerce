import logo from './logo.svg';
import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import { Product } from './customer/components/Product/Product';
import Footer from './customer/components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './customer/components/ProductDetail/ProductDetail';
import { Card } from '@mui/material';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import AddressCart from './customer/components/AddressCard/AddressCart';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routes/CuntomerRoutes';



function App() {
  return (
    <div >


      <CustomerRouters />
      
      {/* <div>
        <Navigation />
      </div>
      <div> */}
      {/* <HomePage /> */}
      {/* <Product /> */}

      {/* <BrowserRouter>
          <Routes> */}
      {/* <Route path="/" element={<Product />} /> */}
      {/* <Route path="/" element={<Checkout/>} /> */}


      {/* </Routes>
        </BrowserRouter> */}
      {/* <ProductDetail /> */}
      {/* <Cart /> */}
      {/* <Order /> */}
      {/* <OrderDetails />
      </div>
      <Footer /> */}

    </div>
  );
}

export default App;
