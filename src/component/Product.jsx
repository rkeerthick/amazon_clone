import React from "react";

const Product = ({title, price, rating, image}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating).fill().map(()=> (<p>🌟</p>))
          }
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
