import './index.scss'

import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';
import Loader from "react-loaders";
import { getRecommendation } from '../../store/productSlice';
import { useState,useEffect } from 'react';
import { addProduct } from "../../store/productSlice";
import axios from "axios";

function Product() {
    const products = useSelector((state) => state.products);
    const red_products = products.filter((pro) => pro.id !== 1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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



    const [productArray, setProductArray] = useState([])

    useEffect(()=>{
      const productArray = JSON.parse(localStorage.getItem("productArray"))
  
      if(productArray && productArray.length > 0){
        setProductArray(productArray);
      }
    } , [])

    useEffect(() => {
      localStorage.setItem("productArray" , JSON.stringify(productArray));
    }, [productArray])


    const API_URL = import.meta.env.VITE_OPENAI_API_URL;
    const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const handleButton = async () => {

      let product = products[products.length-1];

        try {
            // Fetch the response from the OpenAI API with the signal from AbortController
            const response = await fetch(API_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
              body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Do you recommend buying this product based on the use cases : \n ${product.details.useCasePoints} \n The ratings : ${product.details.ratings} and the no of users who have reviewed being : ${product.details.no_of_reviews} \n , if you recommend , start the review with a Yes , else start it with a no \n Give a verbose answer with all the use cases mentioned`  }],
              }),
            });
        
            const data = await response.json();
            console.log(data.choices[0].message.content);
            dispatch(getRecommendation(data.choices[0].message.content))
            navigate('/recommendation');
            
            // resultText.innerHTML = data.choices[0].message.content;
            // return data.choices[0].message.content;

          } catch (error) {
            console.error("Error:", error);
            console.log("Error occurred while generating.");
          }

    }


    if (products.length > 1) {
      return (
        <>
        <ul className="list-none">
          {red_products.map((product) => (
            <li className="mt-4 flex justify-between items-center" key={product.id}>
            <div className="product-card_img-container">
            <img
              src={product.details.image_url}
              alt={product.details.title}
              width={200}
              height={200}
              className="product-card_img"
            />
          </div>
    
          <div className="product-details">
            <h2 className='font-semibold'> Title : </h2>
            <h3 className="product-title">{product.details.title}</h3>
    
            <div className="flex justify-between">
              <h3 className='my-1 font-semibold'> Category : </h3>
              <p className="text-black opacity-50 text-lg capitalize">
                {product.details.category}
              </p>

            </div>

            <div className=' flex justify-between'>
    
              

              <h3 className='font-semibold'> Current Price :</h3>
              <p className="text-black opacity-50 text-lg font-semibold mx-4">
                {product?.details.currency}
                {product?.details.price}
              </p>
            </div>

            {/* <div className=' flex justify-between'>
              <h3 className='font-semibold'> Description :</h3>
              <p className="text-black opacity-50 text-lg font-semibold mx-4">
                {product?.details.description}
              </p>
            </div> */}
          </div>
    
          <div className="button">
            <button onClick={handleButton}>Still Confused ? Let me help you</button>
          </div>
          </li>
          ))}

          
          </ul>

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
        <Loader type='pacman'></Loader>
        </>
      )
    }
    else{
      return (
        <>
        <div className='no-product-render'>
        <h1> No products to show yet , Try searching for some in the buy menu</h1>
        </div>
        
        </>
      )
    }
  
}

export default Product
