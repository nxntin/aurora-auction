

import "./index.scss"
function Homepages() {
  return (
   
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src="logo.png" alt="Heritage Auctions" />
          </div>
          <nav className="navigation">
            <a href="#home">Home</a>
            <a href="#auctions">Auctions</a>
            <a href="#categories">Categories</a>
            <a href="#search">Search</a>
            <a href="#login">Login</a>
          </nav>
        </header>
  
        <main className="main">
          <div className="banner">
            <img src="banner.jpg" alt="Banner" />
          </div>
  
          <div className="categories">
            <div className="category-item">
              <img src="bangles.jpg" alt="Bangles" />
              <p>Bangles</p>
            </div>
            <div className="category-item">
              <img src="chains.jpg" alt="Chains" />
              <p>Chains</p>
            </div>
            <div className="category-item">
              <img src="earrings.jpg" alt="Earrings" />
              <p>Earrings</p>
            </div>
            <div className="category-item">
              <img src="neckwear.jpg" alt="Neckwear" />
              <p>Neckwear</p>
            </div>
            <div className="category-item">
              <img src="pendants.jpg" alt="Pendants" />
              <p>Pendants</p>
            </div>
            <div className="category-item">
              <img src="rings.jpg" alt="Rings" />
              <p>Rings</p>
            </div>
          </div>
  
          <section className="featured-auctions">
            <h2>Featured Auctions</h2>
            <div className="auction-items">
              <div className="auction-item">
                <img src="auction1.jpg" alt="Auction 1" />
                <h3 className="title">Iconic Jewels: The Sense of Style</h3>
                <p className="price">$10,000</p>
                <button>View More</button>
              </div>
              <div className="auction-item">
                <img src="auction2.jpg" alt="Auction 2" />
                <h3 className="title">Iconic Jewels: The Sense of Style</h3>
                <p className="price">$15,000</p>
                <button>View More</button>
              </div>
              <div className="auction-item">
                <img src="auction3.jpg" alt="Auction 3" />
                <h3 className="title">Iconic Jewels: The Sense of Style</h3>
                <p className="price">$20,000</p>
                <button>View More</button>
              </div>
              <div className="auction-item">
                <img src="auction4.jpg" alt="Auction 4" />
                <h3 className="title">Iconic Jewels: The Sense of Style</h3>
                <p className="price">$25,000</p>
                <button>View More</button>
              </div>
            </div>
          </section>
  
          <section className="filter-section">
            <h2>Filters</h2>
            <div className="filters">
              <div className="filter-item">
                <h3>Filter by Day</h3>
                <p>Details</p>
              </div>
              <div className="filter-item">
                <h3>Filter by Auction</h3>
                <p>Details</p>
              </div>
              <div className="filter-item">
                <h3>Filter by Price</h3>
                <p>Details</p>
              </div>
              <div className="filter-item">
                <h3>Filter by Category</h3>
                <p>Details</p>
              </div>
            </div>
          </section>
        </main>
  
        <footer className="footer">
          <p>&copy; 2024 Heritage Auctions. All rights reserved.</p>
          <a href="#privacy">Privacy Policy</a>
        </footer>
      </div>
    );
  }
  


export default Homepages