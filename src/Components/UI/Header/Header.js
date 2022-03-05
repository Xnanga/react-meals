import styles from "./Header.module.css";

import HeaderCartButton from "../Buttons/HeaderCartButton";

const Header = () => {
  return (
    <nav className={styles.header}>
      <span className={styles["header__title"]}>React Meals</span>
      <HeaderCartButton />
    </nav>
  );
};

export default Header;
