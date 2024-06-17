

// export default Jewelry;
import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.scss';

const Jewelry = () => {
  return (
    <div className="jewelry-wrapper">
      <Header />
      <div className="jewelry-container">
        <main className="jewelry-main-content">
          <section className="jewelry-hero-section">
            <div className="jewelry-hero-content">
              <div className="jewelry-hero-text">
                <h1 className="jewelry-hero-title">High Jewelry</h1>
                <p className="jewelry-hero-description">
                  Shop our High Jewelry collection, a selection of the world's most sought-after jewels featuring extraordinary diamonds and gems. Expect to be dazzled by contemporary and vintage pieces from Bulgari, Cartier and Van Cleef & Arpels. Discover magnificent jewelry crafted from the most skilled artisans.
                </p>
              </div>
              <div className="jewelry-hero-image">
                <img src="https://c0.wallpaperflare.com/preview/984/867/753/jewellery-gold-wedding-indian.jpg" alt="High Jewelry" />
              </div>
            </div>
          </section>

          <div className="content-section">
            <div className="filter-section">
              <div className="filter-header">
                <h2>121 results</h2>
              </div>
              <div className="filters">
                <div className="filter-group">
                  <h3>WAY TO BUY</h3>
                  <div>
                    <input type="checkbox" id="buy-now" name="buy-now" />
                    <label htmlFor="buy-now">Buy Now (121)</label>
                  </div>
                </div>
                <div className="filter-group">
                  <h3>JEWELRY TYPE</h3>
                  <div>
                    <input type="checkbox" id="bracelet" name="bracelet" />
                    <label htmlFor="bracelet">Bracelet (17)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="earring" name="earring" />
                    <label htmlFor="earring">Earring (18)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="necklace" name="necklace" />
                    <label htmlFor="necklace">Necklace (28)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="ring" name="ring" />
                    <label htmlFor="ring">Ring (58)</label>
                  </div>
                </div>
                <div className="filter-group">
                  <h3>DESIGNER</h3>
                  <input type="text" placeholder="Search Designer" />
                  <div>
                    <input type="checkbox" id="boucheron" name="boucheron" />
                    <label htmlFor="boucheron">Boucheron (1)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="bulgari" name="bulgari" />
                    <label htmlFor="bulgari">Bulgari (5)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="cartier" name="cartier" />
                    <label htmlFor="cartier">Cartier (6)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="david-webb" name="david-webb" />
                    <label htmlFor="david-webb">David Webb (1)</label>
                  </div>
                  <div>
                    <input type="checkbox" id="graff" name="graff" />
                    <label htmlFor="graff">Graff (1)</label>
                  </div>
                </div>
                <div className="filter-group">
                  <h3>PRICE</h3>
                  <div className="price-range">
                    <label htmlFor="from">From</label>
                    <input type="number" id="from" name="from" />
                    <label htmlFor="to">To</label>
                    <input type="number" id="to" name="to" />
                  </div>
                  <button className="reset-btn">Reset</button>
                </div>
              </div>
            </div>

            <section className="jewelry-items-section">
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 1" />
                <p>Platinum, Gold, Pink Sapphire and Diamond Collar Necklace</p>
                <p>$292,500 USD</p>
                <button>Enquire</button>
              </div>
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 2" />
                <p>Platinum, 10.62cts Ceylon Pink Sapphire and Diamond Floral Earrings</p>
                <p>$105,000 USD</p>
                <button>Buy Now</button>
              </div>
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 3" />
                <p>Gold, Fancy Colored Diamond and Diamond Panthère Necklace</p>
                <p>$294,120 USD</p>
                <button>Enquire</button>
              </div>
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 4" />
                <p>White Gold, Ceylon Sapphire and Diamond Necklace</p>
                <p>$168,750 USD</p>
                <button>Buy Now</button>
              </div>
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 5" />
                <p>Art Deco Platinum, Sapphire and Diamond Bracelet</p>
                <p>$131,250 USD</p>
                <button>Buy Now</button>
              </div>
              <div className="jewelry-item">
                <img src="https://via.placeholder.com/200" alt="Jewelry 6" />
                <p>Oscar Heyman & Brothers Platinum, 27.48ct Unheated Burmese Sapphire and Diamond Ring</p>
                <p>$588,240 USD</p>
                <button>Enquire</button>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Jewelry;
