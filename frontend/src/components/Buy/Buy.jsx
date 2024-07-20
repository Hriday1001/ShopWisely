import './index.scss'
import React from 'react'
import '../../App.scss';
import { useState,useEffect } from 'react';

import Searchbar from '../Searchbar/Searchbar'

function Buy() {
  return (
    <>
    <div className='searchbar'>
        
      <Searchbar/>
    </div>
    </>
  )
}

export default Buy
