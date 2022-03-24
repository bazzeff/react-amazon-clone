import bannerImg from './images/banner-girl-1.png';
//import phone from './img/phone.jpg'
import React from 'react';
import "./Banner.css";

const Banner = () => { 

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-desc">
            <h1>Recommended Products</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
          
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner