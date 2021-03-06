import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../../StateProvider";
import { auth } from "../../../firebase";
import {useTranslation} from "react-i18next";


function HeaderComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.youarecurrent.com/wp-content/uploads/2014/08/Amazon-Logo-schwarz.jpg"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div>
    <HeaderComponent/>
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {user ? <Link to="/dashboard">
          <div className="header__option">
            <span className="header__optionLineOne">Homepage</span> 
            <span className="header__optionLineTwo">Dashboard</span>
          </div>
        </Link> : ''}
        <Link to="/categories">
          <div className="header__option">
            <span className="header__optionLineOne">All</span>
            <span className="header__optionLineTwo">categories</span>
          </div>
        </Link> 
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        
        <Link to="/add-product">
          <div className="header__option">
            <span className="header__optionLineOne">add</span>
            <span className="header__optionLineTwo">product</span>
          </div>
        </Link>
        <Link to="/account">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__option">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__BasketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
