import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.scss';

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <Header />
      <div className="shop-container">
        <main className="shop-main-content">
          <section className="shop-hero-section">
            <div className="shop-hero-overlay">
              <h1 className="shop-hero-title">the autumn equinox</h1>
              <p className="shop-hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          <section className="shop-category-section">
            <div className="shop-category-header">
              <h2>Necklaces</h2>
              <p className="shop-category-description">With new beginnings come more pendants.</p>
              <button className="shop-all-btn">SHOP ALL NECKLACES</button>
            </div>
            <div className="shop-category-items">
              <div className="shop-category-item">
                <img 
                src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Necklace 1" className="shop-category-image" />
                <p className="shop-category-text">Initial Pendant - $100.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Necklace 2" className="shop-category-image" />
                <p className="shop-category-text">Heart Drop - $200.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Necklace 3" className="shop-category-image" />
                <p className="shop-category-text">Diamond Choker - $300.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Necklace 4" className="shop-category-image" />
                <p className="shop-category-text">Leaf Pendant - $150.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Necklace 5" className="shop-category-image" />
                <p className="shop-category-text">Ruby Pendant - $250.00</p>
              </div>
            </div>
          </section>

          <section className="shop-category-section">
            <div className="shop-category-header">
              <h2>Earrings</h2>
              <p className="shop-category-description">Adorn your ears with the new atmosphere.</p>
              <button className="shop-all-btn">SHOP ALL EARRINGS</button>
            </div>
            <div className="shop-category-items">
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Earring 1" className="shop-category-image" />
                <p className="shop-category-text">Diamond Studs - $200.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Earring 2" className="shop-category-image" />
                <p className="shop-category-text">Mini Hoops - $80.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Earring 3" className="shop-category-image" />
                <p className="shop-category-text">Dangling Leaves - $60.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Earring 4" className="shop-category-image" />
                <p className="shop-category-text">Leaf Studs - $40.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://static01.nyt.com/images/2022/04/13/t-magazine/13tmag-raymond-slide-K086/13tmag-raymond-slide-K086-superJumbo.jpg" alt="Earring 5" className="shop-category-image" />
                <p className="shop-category-text">Chain Drops - $60.00</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
