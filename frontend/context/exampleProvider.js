import React from "react";
import exampleContext from "./exampleContext";
const CartProvider = (props) => {
  return (
    <exampleContext.provider value={exampleContext}>
      {props.children}
    </exampleContext.provider>
  );
};
export default exampleProvider;
