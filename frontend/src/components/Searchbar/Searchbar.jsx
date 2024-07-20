import React from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink , useNavigate } from "react-router-dom";
import { useSelector ,  useDispatch } from 'react-redux';
import { addProduct } from "../../store/productSlice";
import '../../App.scss';
import Logo from '../../assets/Logo.png';

function Searchbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      setIsLoading(true);
      const product = await axios.get("http://localhost:3000/products", {
        params: {
          url: searchPrompt,
        },
      });

      navigate('/product');

      const details = product.data[0];

      dispatch(addProduct(details));


      // console.log(title);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

<div className="container">
    <img
      src={Logo}
      alt="image"/>
    <div className="container-text">
      <h2>Visualise product details
      </h2>
      <br />
      <p>Enter the amazon link to your product and let ShopWisely handle the rest for you </p>
      <br />
      
    </div>
    
  </div>

  <div className="form-container">
      <form className="input-form tiny5-regular" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter product link"
          className="searchbar-input"
        />

        
          <button
            type="submit"
            className="searchbar-btn"
            disabled={searchPrompt === ""}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        
      </form>
      </div>

      
    </>
  );
}

export default Searchbar;
