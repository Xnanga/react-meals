import { useContext } from "react";

import styles from "./Cart.module.css";

import Modal from "../UI/Modal/Modal";
import PlusMinusButton from "../UI/Buttons/PlusMinusButton";
import DefaultButton from "../UI/Buttons/DefaultButton";
import MealsContext from "../../Context/meals-context";

const Cart = () => {
  const ctx = useContext(MealsContext);

  const mealCountChangeHandler = (mealData, change) => {
    if (change === "add") {
      ctx.dispatchMealData({
        type: ctx.MEAL_ACTION.addMeals,
        data: mealData,
      });
    }
    if (change === "subtract") {
      ctx.dispatchMealData({
        type: ctx.MEAL_ACTION.removeMeals,
        data: mealData,
      });
    }
  };

  const handleOrder = () => {
    if (ctx.totalBill) {
      console.log("Ordering...");
    } else {
      console.log("Please add something to the cart.");
    }
  };

  return (
    <Modal>
      <div className={styles["cart-list"]}>
        {ctx.mealData.currentMeals.map((meal) => {
          return meal.count === 0 ? (
            ""
          ) : (
            <div key={Math.random()} className={styles["cart-list__meal"]}>
              <div className={styles["cart-list__meal-info-container"]}>
                <h2>{meal.name}</h2>
                <div className={styles["cart-list__meal-info"]}>
                  <span className={styles["cart-list__meal-price"]}>
                    {`£${meal.price}`}
                  </span>
                  <span className={styles["cart-list__meal-count"]}>
                    {`x${meal.count}`}
                  </span>
                </div>
              </div>
              <div className={styles["cart-list__meal-buttons"]}>
                <PlusMinusButton
                  symbol="-"
                  mealId={{ id: meal.id, mealPrice: meal.price }}
                  action={mealCountChangeHandler}
                  change="subtract"
                />
                <PlusMinusButton
                  symbol="+"
                  mealId={{ id: meal.id, mealPrice: meal.price }}
                  action={mealCountChangeHandler}
                  change="add"
                />
              </div>
            </div>
          );
        })}
        <div className={styles["cart-summary"]}>
          <div className={styles["cart-totals"]}>
            <span>Total Amount:</span>
            <span>{`£${ctx.totalBill}`}</span>
          </div>
          <div className={styles["cart-buttons"]}>
            <DefaultButton action={() => ctx.setModalVisible(false)}>
              Close
            </DefaultButton>
            <DefaultButton action={handleOrder}>Order</DefaultButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
