import { useContext } from "react";

import styles from "./Meal.module.css";
import MealsContext from "../../Context/meals-context";
import DefaultButton from "../UI/Buttons/DefaultButton";

const Meal = (props) => {
  const ctx = useContext(MealsContext);

  const mealCountHandler = () => {
    ctx.dispatchMealData({
      type: ctx.MEAL_ACTION.addMeals,
      data: props,
    });
  };

  const getCurrentMealCount = (mealId) => {
    const mealIndex = ctx.mealData.currentMeals.findIndex(
      (meal) => meal.id === mealId
    );
    if (mealIndex > -1) return ctx.mealData.currentMeals[mealIndex].count;
  };

  return (
    <div className={styles["meal"]}>
      <div className={styles["meal__info"]}>
        <h2 className={styles["meal__name"]}>{props.mealName}</h2>
        <span className={styles["meal__description"]}>
          {props.mealDescription}
        </span>
        <span className={styles["meal__price"]}>{`£${props.mealPrice}`}</span>
      </div>
      <div className={styles["meal__options"]}>
        <div>
          <span className={styles["meal__amount-text"]}>Amount:</span>
          <input
            className={styles["meal__amount-input"]}
            type="number"
            value={getCurrentMealCount(props.id) || 0}
            disabled
          />
        </div>
        <DefaultButton action={mealCountHandler}>Add</DefaultButton>
      </div>
    </div>
  );
};

export default Meal;
