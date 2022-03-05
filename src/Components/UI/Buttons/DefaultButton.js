import styles from "./DefaultButton.module.css";

const DefaultButton = (props) => {
  return <button className={styles["default-button"]}>{props.children}</button>;
};

export default DefaultButton;
