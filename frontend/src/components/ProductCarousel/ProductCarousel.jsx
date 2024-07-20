import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import product_1 from '../../assets/product-1.svg';
import product_2 from '../../assets/product-2.svg';
import product_3 from '../../assets/product-3.svg';
import product_4 from '../../assets/product-4.svg';
import product_5 from '../../assets/product-5.svg';



function ProductCarousel() {
  return (
    <>
      <div className="product-carousel">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          <img src={product_1} alt="smartwatch" width={184} height={184} />
          <img src={product_2} alt="smartwatch" width={184} height={184} />
          <img src={product_3} alt="smartwatch" width={184} height={184} />
          <img src={product_4} alt="smartwatch" width={184} height={184} />
          <img src={product_5} alt="smartwatch" width={184} height={184} />
        </Carousel>

      </div>
    </>
  );
}

export default ProductCarousel;
