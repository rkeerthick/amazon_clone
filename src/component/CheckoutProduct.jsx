import React from "react";
import { useStateValue } from "../StateProvider";
import { actions } from "../Actions";

const CheckoutProduct = ({
  itemId,
  productId,
  title,
  image,
  price,
  rating,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: actions.removeFromBasket,
      id: itemId,
    });
  };
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
        <button onClick={removeItem}>Remove item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
