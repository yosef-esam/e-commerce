import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

function Test() {
  const { cartItems, handleIncrease, handleDecrease } = useCart();
  return (
    <div>
      {cartItems.map((item, index) => {
        console.log(cartItems);
        const handleIncreasefn = () => {
          handleIncrease(item);
        };
        const handleDecreaseFunc = () => {
          handleDecrease(item);
        };

        return (
          <div key={index} className="text-black">
            <button onClick={handleIncreasefn}> +</button>
            <button onClick={handleDecreaseFunc}> -</button>
            <img src={item.imageSrc} alt="" />
            <div> {item.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
