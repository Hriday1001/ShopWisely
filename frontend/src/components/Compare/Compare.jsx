import './index.scss'

import * as React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { addProduct } from '../../store/productSlice';

function createData(title, category, price, ratings, no_of_reviews) {
  return { title, category, price, ratings, no_of_reviews };
}



export default function Compare() {
    const products = useSelector((state) => state.products)
    const [searchPrompt1, setSearchPrompt1] = useState("");
    const [searchPrompt2, setSearchPrompt2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

    if(products.length > 1){
        const product_1 = products[products.length - 1];
    const product_2 = products[products.length - 2];

    const rows = [
        createData(product_1.details.title, product_1.details.category, product_1.details.price, product_1.details.ratings, product_1.details.no_of_reviews),
        createData(product_2.details.title, product_2.details.category, product_2.details.price, product_2.details.ratings, product_2.details.no_of_reviews),
    ];

    return (
        <>
        <div className="table-component">

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Ratings</TableCell>
            <TableCell align="right">No of reviews</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.no_of_reviews}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.ratings}</TableCell>
              <TableCell align="right">{row.no_of_reviews}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>

        </>

    )

    }
    else{

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      setIsLoading(true);
      const product_1 = await axios.get("http://localhost:3000/products", {
        params: {
          url: searchPrompt1,
        },
      });

      const product_2 = await axios.get("http://localhost:3000/products", {
        params: {
          url: searchPrompt2,
        },
      });

      

      const details1 = product_1.data[0];
      const details2 = product_2.data[0];

      dispatch(addProduct(details1));
      dispatch(addProduct(details2));

      navigate('/compare');


      // console.log(title);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="heading">
        <h2 className='tiny5-regular'>
            Enter links of two products that you would like to compare 
        </h2>
    </div>
    

    <div className="form-container-1">
      <form className="input-form tiny5-regular" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt1}
          onChange={(e) => setSearchPrompt1(e.target.value)}
          placeholder="Enter product link"
          className="searchbar-input"
        />

        
           <button
            type="submit"
            className="searchbar-btn"
            disabled={searchPrompt1 === ""}
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        
      </form>
      </div>

<div className="form-container-2">
<form className="input-form tiny5-regular" onSubmit={handleSubmit}>
  <input
    type="text"
    value={searchPrompt2}
    onChange={(e) => setSearchPrompt2(e.target.value)}
    placeholder="Enter product link"
    className="searchbar-input"
  />

  
    <button
      type="submit"
      className="searchbar-btn"
      disabled={searchPrompt2 === ""}
    >
      {isLoading ? "Searching..." : "Search"}
    </button>
  
</form>
</div>

    

    </>
  );
}

}

