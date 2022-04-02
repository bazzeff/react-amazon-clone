import "./App.css"; 
import React, { useEffect } from "react"; 
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Account from "./Account";
import About from "./About";
import Faq from "./components/layout/faq/Faq";
import Terms from "./components/layout/terms/Terms";
import Contact from "./components/layout/contact/Contact";
import Help from "./components/layout/help/Help"; 
import Dashboard from "./Dashboard";
import Reset from "./Reset";
import Register from "./Register";
import AddProduct from "./AddProduct";
import Industries from "./Industries";
import Categories from "./Categories";
import Agriculture from "./pages/agriculture/Agriculture";
import Mining from "./pages/mining/Mining";
import Utilities from "./pages/utilities/Utilities";
import Construction from "./pages/construction/Construction";
import Manufacturing from "./pages/manufacturer/Manufacturing";
import RetailTrade from "./pages/retail-trade/RetailTrade";
import Transportation from "./pages/transportation/Transportation";
import Wholesaler from "./pages/wholesaler/Wholesaler";
import Information from "./pages/information/Information";
import Professional from "./pages/professional/Professional";
import FinancialServices from "./pages/financial-services/FinancialServices";
import Enterprises from "./pages/enterprises/Enterprises";
import Insurance from "./pages/insurance/Insurance";
import RealEstate from "./pages/real-estate/RealEstate";
import AdministrativeSupport from "./pages/administrative-support/AdministrativeSupport";
import Schools from "./pages/schools/Schools";
import HealthCare from "./pages/health-care/HealthCare";
import Entertainment from "./pages/art-entertainment/Entertainment";
import Accommodations from "./pages/accommodation/Accommodations";
import OtherServices from "./pages/other-services/OtherServices";
import Agencies from "./pages/agencies/Agencies";
import Careers from "./pages/careers/Careers";
import {  AirPods, Apple, AppleWatch, Audio, BestSellers, CellPhones, CertifiedRenewed,Chromebooks, EnvironmentalImpact, G5Phones, IMac, IPad, 
IPhone, IPhone8, IPhone11, IPhone12, IPhone13, IPhoneX, IPhoneXR, IPhoneXS, Laptops, MacBook, MacBookAir, MacBookPro, Monitors, RenewedByGoPro, RenewedBySennheiser,
SamsungGalaxy, Tablet, UnlockedPhones, VideoGames } from "./pages/electronics";
import Header from "./components/layout/header/Header";
import BusinessPages from "./pages/business/BusinessPages";

const promise = loadStripe("pk_test_ttgsxvQHqbgNZgopICqlH6Lr00bdFsBxK4");


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

    <Route
    exact
    path="/payment">      
      <Route path="/payment" element={<Payment />}/>
    </Route> 
      <Route path="orders" element={<Orders />} /> 
      <Route path="account" element={<Account />} /> 
      <Route path="checkout" element={<Checkout />} /> 
      <Route path="about" element={<About /> } />
      <Route path="faq" element={<Faq /> } />
      <Route path="terms" element={<Terms /> } />
      <Route path="contact/us" element={<Contact /> } />
      <Route path="help" element={<Help /> } />
      <Route path="/register" element={<Register />} />
      <Route exact path="/reset" element={<Reset />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/add-product" element={<AddProduct />} />
      <Route exact path="/industries" element={<Industries />} />
      <Route exact path="/categories" element={<Categories />} />

      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/mining" element={<Mining />} />
      <Route path="/utilities" element={<Utilities />} />
      <Route path="/construction" element={<Construction />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/wholesaler" element={<Wholesaler />} />
      <Route path="/retail-trade" element={<RetailTrade />} />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/information" element={<Information />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/financial-services" element={<FinancialServices />} />
      <Route path="/enterprises" element={<Enterprises />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/administrative-support" element={<AdministrativeSupport />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/health-care" element={<HealthCare />} />
      <Route path="/art-entertainment" element={<Entertainment />} />
      <Route path="/accommodation" element={<Accommodations />} />
      <Route path="/other-services" element={<OtherServices />} />
      <Route path="/agencies" element={<Agencies />} />
      <Route path="/careers" element={<Careers />} />
      

      <Route path="/business" element={<BusinessPages />} />

      <Route path="/air-pod" element={<AirPods />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/apple-watch" element={<AppleWatch />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/best-sellers" element={<BestSellers />} />
      <Route path="/cell-phones" element={<CellPhones />} />
      <Route path="/certified-renewed" element={<CertifiedRenewed />} />
      <Route path="/chrome-books" element={<Chromebooks />} />
      <Route path="/i-mac" element={<IMac />} />
      <Route path="/i-pad" element={<IPad />} />
      <Route path="/i-phone" element={<IPhone />} />
      <Route path="/i-phone-8" element={<IPhone8 />} />
      <Route path="/i-phone-11" element={<IPhone11 />} />
      <Route path="/i-phone-12" element={<IPhone12 />} />
      <Route path="/i-phone-13" element={<IPhone13 />} />
      <Route path="/i-phone-x" element={<IPhoneX />} />
      <Route path="/i-phone-xr" element={<IPhoneXR />} />
      <Route path="/i-phone-xs" element={<IPhoneXS />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/mac-book" element={<MacBook />} />
      <Route path="/mac-book-air" element={<MacBookAir />} />
      <Route path="/mac-book-pro" element={<MacBookPro />} />
      <Route path="/monitors" element={<Monitors />} />
      <Route path="/renewed-by-go-pro" element={<RenewedByGoPro />} />
      <Route path="/renewed-by-sennheiser" element={<RenewedBySennheiser />} />
      <Route path="/samsung-galaxy" element={<SamsungGalaxy />} />
      <Route path="/tablet" element={<Tablet />} />
      <Route path="/unlocked-phones" element={<UnlockedPhones />} />
      <Route path="/video-games" element={<VideoGames />} />
      <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
      <Route path="/5g-phones" element={<G5Phones />} />


    </Routes>  
     {/* Single Widget  */}
    <Footer /> 
       </div>
    </BrowserRouter>
  );
}

export default App;