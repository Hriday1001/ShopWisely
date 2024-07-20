import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import "./index.scss";
import Button from "@mui/material/Button";

function Recommendation() {
  const products = useSelector((state) => state.products);
  const product = products[products.length - 1];
  // console.log(products);
  const decision = product.recommendation.split(",")[0];
  console.log(product.relatedProducts);
  // const points = product.recommendation.split('\n');
  // let ref = useRef(-1);

  if (decision == "Yes") {
    return (
      <>
      <div className="button">
        <Button variant="contained" color="success">
          Strong approval
        </Button>
        </div>
        <div className="recommendation-content">
          <h2>{product.recommendation}</h2>
        </div>
        <div className="related-products">
          {product.relatedProducts}
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="button">
        <Button variant="outlined" color="error">
          Might try something else
        </Button>
        </div>
        <div className="recommendation-content">
          <h2>{product.recommendation}</h2>
        </div>
      </>
    );
  }
}

export default Recommendation;
