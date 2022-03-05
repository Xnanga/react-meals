import styles from "./Meal.module.css";

import DefaultButton from "../UI/Buttons/DefaultButton";

const Meal = (props) => {
  return (
    <div className={styles["meal"]}>
      <div className={styles["meal__info"]}>
        <h2 className={styles["meal__name"]}>{props.mealName}</h2>
        <span className={styles["meal__description"]}>
          {props.mealDescription}
        </span>
        <span className={styles["meal__price"]}>{props.mealPrice}</span>
      </div>
      <div className={styles["meal__options"]}>
        <div>
          <span className={styles["meal__amount-text"]}>Amount:</span>
          <input
            className={styles["meal__amount-input"]}
            type="number"
            defaultValue="0"
            min="0"
          />
        </div>
        <DefaultButton>Add</DefaultButton>
      </div>
    </div>
  );
};

export default Meal;
