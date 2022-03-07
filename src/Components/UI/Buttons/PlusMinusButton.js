import styles from "./PlusMinusButton.module.css";

const PlusMinusButton = (props) => {
  return (
    <button
      className={styles["plus-minus-button"]}
      onClick={() => props.action(props.mealId, props.change)}
    >
      {props.symbol}
    </button>
  );
};

export default PlusMinusButton;
