import styles from "./MealsMenu.module.css";

import Meal from "./Meal";

const MealsMenu = (props) => {
  return (
    <div className={styles["meals-menu"]}>
      <Meal
        mealName="Sushi"
        mealDescription="Finest fish and veggies"
        mealPrice="£22.99"
      />
      <Meal
        mealName="Sushi"
        mealDescription="Finest fish and veggies"
        mealPrice="£22.99"
      />
      <Meal
        mealName="Sushi"
        mealDescription="Finest fish and veggies"
        mealPrice="£22.99"
      />
    </div>
  );
};

export default MealsMenu;
