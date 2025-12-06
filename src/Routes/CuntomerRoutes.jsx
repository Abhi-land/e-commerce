import React from "react";
import Navigation from "../customer/components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import { Product } from "../customer/components/Product/Product";
import ProductDetail from "../customer/components/ProductDetail/ProductDetail";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} ></Route>
                    <Route path="/cart" element={<Cart />} ></Route>
                    <Route path="/:lavelOne/:lavelTwo/:lavelThre" element={<Product />} ></Route>
                    <Route path="/Product/:ProductId" element={<ProductDetail />} ></Route>
                    <Route path="/checkout" element={<Checkout />} ></Route>
                    <Route path="/account/order" element={<Order />} ></Route>
                    <Route path="/account/order/:orderId" element={<OrderDetails />} ></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

            

        // {/* <Product /> */ }

        // {/* <Route path="/" element={<Product />} /> */ }
        // {/* <Route path="/" element={<Checkout/>} /> */ }



        // {/* <ProductDetail /> */ }
        // {/* <Cart /> */ }
        // {/* <Order /> */ }
        // <OrderDetails />

    )
}

export default CustomerRouters