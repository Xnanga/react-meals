import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Icons/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={styles["header-cart-button"]}>
      <CartIcon stylingClass={"cart-button-icon"} />
      <span className={styles["header-cart-button__text"]}>Your Cart</span>
      <div className={styles["header-cart-button__number-container"]}>
        <span className={styles["header-cart-button__number"]}>0</span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
