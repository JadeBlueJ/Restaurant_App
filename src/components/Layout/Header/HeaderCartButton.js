import { Fragment } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./HeaderCartIcon";
const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}> 4 </span>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
