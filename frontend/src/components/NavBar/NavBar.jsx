import "./index.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faContactBook,
  faContactCard,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { Home, Coin,Cart , ProductHuntFill } from 'akar-icons';
import Avatar from '@mui/material/Avatar';
import Logo2 from '../../assets/Logo2.png';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="navbar">
      <ul>
    <li>
        <Link to="">
            <Avatar alt="Remy Sharp" src={Logo2} sx={{ width: 46, height: 46 }}/>
			<span>Shopwisely</span>
        </Link>

    </li>
	<li>
		<Link to="">
			<Home/>
			<span>Home</span>
		</Link>
	</li>
    <li>
		<Link to="/buy">
            <Cart strokeWidth={2} size={36} />
			<span>Buy</span>
		</Link>
	</li>
	<li>
		<Link to="/compare">
            <Coin strokeWidth={2} size={36} />
			<span>Compare Products</span>
		</Link>
	</li>	
	<li>
		<a href="/product">
            <ProductHuntFill strokeWidth={2} size={36} />
			<span>Products</span>
		</a>
	</li>
    <li>
		<a href="#">
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
			<span>Contact Us</span>
		</a>
	</li>		
	
</ul>
</div>
    </>
  );
}

export default NavBar;
