import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = props => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: "9.98" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
