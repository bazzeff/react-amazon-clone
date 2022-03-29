import "./App.css"; 
import React, { useEffect } from "react"; 
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import Orders from "./Orders";
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
import Agriculture from "./pages/agriculture/Agriculture";
//import HotItem from "./HotItem";
//import StartNow from "./StartNow";
//import OnSale from "./OnSale";
//import BestSeller from "./BestSeller";
//import TopViewed from "./TopViewed";
//import Newsletter from "./Newsletter";
import {  AirPods, Apple, AppleWatch, Audio, BestSellers, CellPhones, CertifiedRenewed,Chromebooks, EnvironmentalImpact, G5Phones, IMac, IPad, 
IPhone, IPhone8, IPhone11, IPhone12, IPhone13, IPhoneX, IPhoneXR, IPhoneXS, Laptops, MacBook, MacBookAir, MacBookPro, Monitors, RenewedbyGoPro, RenewedbySennheiser,
SamsungGalaxy, Tablet, UnlockedPhones, VideoGames } from "./pages/electronics";
import Header from "./components/layout/header/Header";
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
    <Header />
    <Routes>
    <Route path="/"> 
      <Route path="/" element={<Home />}/>

    </Route>
    <Route path="/login">
      <Route path="/login" element={<Login />}/>
    </Route> 
      <Route path="orders" element={<Orders />} /> 
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

      <Route exact path="/agriculture" element={<Agriculture />} />

      <Route exact path="/air-pod" element={<AirPods />} />
      <Route exact path="/apple" element={<Apple />} />

      <Route exact path="/apple-watch" element={<AppleWatch />} />
      <Route exact path="/audio" element={<Audio />} />
      <Route exact path="/best-sellers" element={<BestSellers />} />
      <Route exact path="/cell-phones" element={<CellPhones />} />
      <Route exact path="/certified-renewed" element={<CertifiedRenewed />} />
      <Route exact path="/chrome-books" element={<Chromebooks />} />
      <Route exact path="/imac" element={<IMac />} />
      <Route exact path="/ipad" element={<IPad />} />
      <Route exact path="/iphone" element={<IPhone />} />
      <Route exact path="/iphone8" element={<IPhone8 />} />
      <Route exact path="/iphone11" element={<IPhone11 />} />
      <Route exact path="/iphone12" element={<IPhone12 />} />
      <Route exact path="/iphone13" element={<IPhone13 />} />
      <Route exact path="/iphonex" element={<IPhoneX />} />
      <Route exact path="/iphonexr" element={<IPhoneXR />} />
      <Route exact path="/iphonexs" element={<IPhoneXS />} />
      <Route exact path="/laptops" element={<Laptops />} />
      <Route exact path="/mac-book" element={<MacBook />} />
      <Route exact path="/mac-book-air" element={<MacBookAir />} />
      <Route exact path="/mac-book-pro" element={<MacBookPro />} />
      <Route exact path="/monitors" element={<Monitors />} />
      <Route exact path="/renewed-by-go-pro" element={<RenewedbyGoPro />} />
      <Route exact path="/renewed-by-sennheiser" element={<RenewedbySennheiser />} />
      <Route exact path="/samsung-galaxy" element={<SamsungGalaxy />} />
      <Route exact path="/tablet" element={<Tablet />} />
      <Route exact path="/unlocked-phones" element={<UnlockedPhones />} />
      <Route exact path="/video-games" element={<VideoGames />} />
      <Route exact path="/environmental-impact" element={<EnvironmentalImpact />} />
      <Route exact path="/5g-phones" element={<G5Phones />} />


    </Routes>  
     {/* Single Widget  */}
    <Footer /> 
       </div>
    </BrowserRouter>
  );
}

export default App;