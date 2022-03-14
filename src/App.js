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
import About from "./About";
import Faq from "./components/layout/faq/Faq";
import Terms from "./components/layout/terms/Terms";
import Contact from "./components/layout/contact/Contact";
import Help from "./components/layout/help/Help";

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
      <Route path="about" element={<About /> } />
      <Route path="faq" element={<Faq /> } />
      <Route path="terms" element={<Terms /> } />
      <Route path="contact/us" element={<Contact /> } />
      <Route path="help" element={<Help /> } />
    </Routes>  
     {/* Single Widget  */}
    <Footer /> 
       </div>
    </BrowserRouter>
  );
}

export default App;
