import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./index.scss";
import Loader from "react-loaders";
import accordion1 from '../../assets/accordion-1.png';
import accordion2 from '../../assets/accordion-2.png';
import accordion3 from '../../assets/accordion-3.webp';
import accordion4 from '../../assets/accordion-4.png';
import accordion5 from '../../assets/accordion-5.webp';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="page-content">
          <p className="mx-5 introduction-text permanent-marker-regular">
            Welcome to ShopWisely! Your Ultimate Guide to Smarter Shopping
          </p>

          <h1 className="">Discover a New Way to Shop</h1>

          <div className="carousel">
            <ProductCarousel />
          </div>
          <div className="description-text">
          <p className="playwrite-gb-s-descriptionText">
          At ShopWisely, we believe that shopping online should be easy, informative, and enjoyable. Our platform provides you with detailed and readable information about any e-commerce item, helping you make informed decisions with confidence. Whether you’re looking for the latest tech gadgets, fashion trends, or household essentials, ShopWisely is here to assist you every step of the way.
          </p>
        </div>
        </div>
      </div>
      
      <div className="accordion">
      <h1>
        WHY SHOPWISELY ?
      </h1>
  <ol>
    <li tabIndex="1">
    <div style={{ 
      backgroundImage: `url(${accordion1})` 
    }}>
        <a href="#">
          <h2>Comprehensive Product Reviews</h2>
          <span>
          We offer in-depth reviews of a wide range of products, covering all the details you need to know.
          <br /> Our reviews are unbiased, thoroughly researched, and written in a clear, easy-to-understand format.
          </span>
        </a>
      </div>
    </li>
    <li tabIndex="2">
      <div style={{ 
      backgroundImage: `url(${accordion2})` 
    }}>
        <a href="#">
          <h2>User-Friendly Interface</h2>
          <span>
          Navigating through products has never been easier.
          <br /> Our clean and intuitive design ensures you can find the information you need quickly and efficiently.
          </span>
        </a>
      </div>
    </li>
    <li tabIndex="3">
    <div style={{ 
      backgroundImage: `url(${accordion3})` 
    }}>
        <a href="#">
          <h2>AI Generated Expert Recommendations</h2>
          <span>
          Our team of experts continuously evaluates and updates our recommendations to ensure you have access to the best products on the market.
          </span>
        </a>
      </div>
    </li>
    <li tabIndex="4">
    <div style={{ 
      backgroundImage: `url(${accordion4})` 
    }}>
        <a href="#">
          <h2>Price Comparisons</h2>
          <span>
          Save time and money with our real-time price comparison feature. See where you can get the best deal on your favorite items.
          </span>
        </a>
      </div>
    </li>
    <li tabIndex="5">
    <div style={{ 
      backgroundImage: `url(${accordion5})` 
    }}>
        <a href="#">
          <h2>Customer Ratings and Reviews</h2>
          <span>
          Read genuine reviews from other shoppers to gain insights into product performance and reliability.
          </span>
        </a>
      </div>
    </li>
   
  </ol>
</div>
    </>
  );
}

export default Home;
