import React from "react";
import { image } from "../assets/image";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={image.Checkout_Ad} alt="" />

        <div className="">
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              
            />
          ))} */}
          <CheckoutProduct
           id="12321341"
           title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
           price={11.96}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
