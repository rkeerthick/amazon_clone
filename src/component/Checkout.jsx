import React from "react";
import { image } from "../assets/image";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Header from "./Header";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
    <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img className="checkout__ad" src={image.Checkout_Ad} alt="" />

          <div className="">
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                itemId={item.itemId}
                productId={item.Productid}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
