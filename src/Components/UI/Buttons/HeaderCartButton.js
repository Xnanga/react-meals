import { useContext } from "react";

import styles from "./HeaderCartButton.module.css";

import MealsContext from "../../../Context/meals-context";
import CartIcon from "../Icons/CartIcon";

const HeaderCartButton = () => {
  const ctx = useContext(MealsContext);

  return (
    <button className={styles["header-cart-button"]}>
      <CartIcon stylingClass={"cart-button-icon"} />
      <span className={styles["header-cart-button__text"]}>Your Cart</span>
      <div className={styles["header-cart-button__number-container"]}>
        <span className={styles["header-cart-button__number"]}>
          {ctx.totalMeals}
        </span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
