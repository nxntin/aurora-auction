import React from 'react';
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';
import './index.scss';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="top-bar"></div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Gifts</a></li>
          </ul>
          <h1 className="logo">AURORA</h1>
          <div className="search-and-icons">
            <input type="text" placeholder="Search" className="search-input" />
            <a href="#"><i className="icon search-icon">🔍</i></a>
            <a href="#"><i className="icon heart-icon">❤️</i></a>
            <a href="#"><i className="icon cart-icon">🛒</i></a>
            <a href="#"><i className="icon user-icon">👤</i></a>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div className="hero-section">
          <img className="main-image" src="https://images5.alphacoders.com/107/1070518.jpg" alt="Main" />
          <div className="hero-text">
            <h1>the autumn equinox</h1>
            <p>Fall has arrived. Shop for our new releases starting today.</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <section className="category-section">
          <h2>Shop by category</h2>
          <p>Indulge in what we offer.</p>
          <div className="category-items">
            <div className="category-item">
              <img src="https://fleckedwithgold.com/cdn/shop/files/ultraminiclover.jpg?v=1686489354" alt="Necklaces" />
              <p>Necklaces</p>
            </div>
            <div className="category-item">
              <img src="https://www.lmfj.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Flmfjcom%2F7727e45a-934a-4f51-be6e-f1b8fc7410e4_20221011%2Bearring%2Bdangle.png%3Fauto%3Dcompress%2Cformat&w=3840&q=75" alt="Earrings" />
              <p>Earrings</p>
            </div>
            <div className="category-item">
              <img src="https://alexandramarksjewelry.com/cdn/shop/files/PermanentJewelry_AlexandraMarks_1000x1000.png?v=1713974191" alt="Bracelets" />
              <p>Bracelets</p>
            </div>
            <div className="category-item">
              <img src="https://ajaffe.com/pub/media/wysiwyg/Engagaement_1280_x_586_pixels_01_Sep_2022-new.jpg" alt="Rings" />
              <p>Rings</p>
            </div>
            <div className="category-item">
              <img src="https://m.media-amazon.com/images/I/61b0IWUpv-L._AC_UY1000_.jpg" alt="Charms" />
              <p>Charms</p>
            </div>
          </div>
        </section>
        <hr></hr>
        <section className="products-section">
          <h2>Iconic Jewels: Her Sense of Style</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://cache.net-a-porter.com/content/images/story-head-content-24thOctober2022-1666086890596.jpeg/w1900_q65.jpeg" alt="Product 1" />
              <p>Iconic Jewels: Her Sense of Style</p>
              <p>26 MAY 2024 | 12:00 PM CEST | GENEVA</p>
              <button>ADD TO CARD</button>
            </div>
            <div className="product-card">
              <img src="https://www.ready-made.co/cdn/shop/files/banner-01_2500x_a13e91f0-1874-4975-9d90-f630f445aa0a.jpg?v=1638526014" alt="Product 2" />
              <p>Iconic Jewels: Her Sense of Style</p>
              <p>26 MAY 2024 | 12:00 PM CEST | GENEVA</p>
              <button>ADD TO CARD</button>
            </div>
            <div className="product-card">
              <img src="https://i8.amplience.net/i/liberty/200929-stacking-jewellery-header?fmt=auto&qlt=60" alt="Product 3" />
              <p>Iconic Jewels: Her Sense of Style</p>
              <p>26 MAY 2024 | 12:00 PM CEST | GENEVA</p>
              <button>ADD TO CARD</button>
            </div>
            <div className="product-card">
              <img src="https://hips.hearstapps.com/hmg-prod/images/vintage-necklaces-and-jewelry-for-sale-in-the-royalty-free-image-1687462684.jpg" alt="Product 4" />
              <p>Iconic Jewels: Her Sense of Style</p>
              <p>26 MAY 2024 | 12:00 PM CEST | GENEVA</p>
              <button>ADD TO CARD</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
