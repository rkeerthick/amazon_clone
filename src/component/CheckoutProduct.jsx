import React from "react";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((key) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
