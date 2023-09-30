import React from "react";
import { image } from "../assets/image";
import Search from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={image.Logo} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Returns &</span>
          <span className="header__optionLine2">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasket className="header__basketIcon" />
            <span className="header__optionLine2 header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
