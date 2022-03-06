import styles from "./DefaultButton.module.css";

const DefaultButton = (props) => {
  return (
    <button className={styles["default-button"]} onClick={props.action}>
      {props.children}
    </button>
  );
};

export default DefaultButton;
