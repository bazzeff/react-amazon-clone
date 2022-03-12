import "./App.css"; 
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import Order from "./Order";
import Account from "./Account";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="login" element={<Login />} /> 
      <Route path="orders" element={<Order />} /> 
      <Route path="account" element={<Account />} /> 
      <Route path="checkout" element={<Checkout />} /> 
    </Routes>  
     {/* Single Widget  */}
    <Footer /> 
       </div>
    </BrowserRouter>
  );
}

export default App;
