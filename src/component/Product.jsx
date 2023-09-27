import React from "react";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Lorem ipsum dolor sit.</p>
        <p className="product__price">
          <span>$</span>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟🌟🌟</p>
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
