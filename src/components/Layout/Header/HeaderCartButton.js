import { Fragment } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
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
