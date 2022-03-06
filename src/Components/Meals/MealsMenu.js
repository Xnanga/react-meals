import styles from "./MealsMenu.module.css";

import Meal from "./Meal";
import AvailableMealsData from "./AvailableMealsData";

const MealsMenu = () => {
  return (
    <div className={styles["meals-menu"]}>
      {AvailableMealsData.map((meal) => {
        return (
          <Meal
            key={meal.id}
            id={meal.id}
            mealName={meal.name}
            mealDescription={meal.description}
            mealPrice={meal.price}
          />
        );
      })}
    </div>
  );
};

export default MealsMenu;
