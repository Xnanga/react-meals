import { useEffect, useState, useContext } from "react";

import styles from "./Meal.module.css";
import MealsContext from "../../Context/meals-context";
import DefaultButton from "../UI/Buttons/DefaultButton";

const Meal = (props) => {
  const ctx = useContext(MealsContext);

  const [mealCount, setMealCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const mealCountHandler = () => {
    setMealCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    setTotalPrice(mealCount * props.mealPrice);
  }, [mealCount, props.mealPrice]);

  useEffect(() => {
    ctx.mealsDataHandler(props.id, props.mealName, mealCount, totalPrice);
  }, [ctx, props.id, props.mealName, mealCount, totalPrice]);

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
            value={mealCount}
            min="0"
            disabled
          />
        </div>
        <DefaultButton action={mealCountHandler}>Add</DefaultButton>
      </div>
    </div>
  );
};

export default Meal;
