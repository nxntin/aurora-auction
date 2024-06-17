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
              <h2 className='name-item'>Necklaces</h2>
              <p className="shop-category-description">With new beginnings come more pendants.</p>
              <button className="shop-all-btn">SHOP ALL NECKLACES</button>
            </div>
            <div className="shop-category-items">
              <div className="shop-category-item">
                <img 
                src="https://i.pinimg.com/736x/cd/ab/3a/cdab3a2b191bb331d3ff284b54e8088d.jpg" alt="Necklace 1" className="shop-category-image" />
                <p className="shop-category-text">Initial Pendant - $100.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://t3.ftcdn.net/jpg/02/34/21/58/360_F_234215884_pAF9PoUM5xEAsqW8g2oXsFUPRnkuOA14.jpg" alt="Necklace 2" className="shop-category-image" />
                <p className="shop-category-text">Heart Drop - $200.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMG5lY2tsYWNlfGVufDB8fDB8fHww" alt="Necklace 3" className="shop-category-image" />
                <p className="shop-category-text">Diamond Choker - $300.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg" alt="Necklace 4" className="shop-category-image" />
                <p className="shop-category-text">Leaf Pendant - $150.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://t4.ftcdn.net/jpg/01/62/11/95/360_F_162119540_hP8m0IfzyMG0zIiPSmtbB99F1vtrW8e3.jpg" alt="Necklace 5" className="shop-category-image" />
                <p className="shop-category-text">Ruby Pendant - $250.00</p>
              </div>
            </div>
          </section>

          <section className="shop-category-section">
            <div className="shop-category-header">
              <h2 className='name-item'>Earrings</h2>
              <p className="shop-category-description">Adorn your ears with the new atmosphere.</p>
              <button className="shop-all-btn">SHOP ALL EARRINGS</button>
            </div>
            <div className="shop-category-items">
              <div className="shop-category-item">
                <img src="https://i.pinimg.com/474x/8d/37/be/8d37becb4d93ec1102e6a76c1058f71e.jpg" alt="Earring 1" className="shop-category-image" />
                <p className="shop-category-text">Diamond Studs - $200.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://cdn4.sharechat.com/img_594730_1b365bce_1674748590893_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=893_sc.jpg" alt="Earring 2" className="shop-category-image" />
                <p className="shop-category-text">Mini Hoops - $80.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://5.imimg.com/data5/KN/YJ/MY-36227906/jewel-rich-matt-and-shiny-earring-er-hd-010-500x500.png" alt="Earring 3" className="shop-category-image" />
                <p className="shop-category-text">Dangling Leaves - $60.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://hotdiamonds.co.uk/images/hd-x-jj-soul-huggie-earrings-p2355-8672_zoom.jpg" alt="Earring 4" className="shop-category-image" />
                <p className="shop-category-text">Leaf Studs - $40.00</p>
              </div>
              <div className="shop-category-item">
                <img src="https://i.pinimg.com/736x/a4/5e/59/a45e5905dcf5be8a386b6b43c5a24323.jpg" alt="Earring 5" className="shop-category-image" />
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
