import "./App.css"; 
import React, { useEffect } from "react"; 
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
import Dashboard from "./Dashboard";
import Reset from "./Reset";
import Register from "./Register";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import AddProduct from "./AddProduct";
import Industries from "./Industries";
import Categories from "./Categories";
//import HotItem from "./HotItem";
//import StartNow from "./StartNow";
//import OnSale from "./OnSale";
//import BestSeller from "./BestSeller";
//import TopViewed from "./TopViewed";
//import Newsletter from "./Newsletter";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
    <Route path="/"> 
      <Route path="/" element={<Home />}/>

    </Route>
    <Route path="/login">
      <Route path="/login" element={<Login />}/>
    </Route> 
      <Route path="orders" element={<Order />} /> 
      <Route path="account" element={<Account />} /> 
      <Route path="checkout" element={<Checkout />} /> 
      <Route path="about" element={<About /> } />
      <Route path="faq" element={<Faq /> } />
      <Route path="terms" element={<Terms /> } />
      <Route path="contact/us" element={<Contact /> } />
      <Route path="help" element={<Help /> } />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/reset" element={<Reset />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/add-product" element={<AddProduct />} />
      <Route exact path="/industries" element={<Industries />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>  
     {/* Single Widget  */}
    <Footer /> 
       </div>
    </BrowserRouter>
  );
}

export default App;