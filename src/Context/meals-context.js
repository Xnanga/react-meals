import React, { useState, useReducer, useEffect } from "react";

const MealsContext = React.createContext({
  mealData: [],
  totalCost: 0,
  overallTotals: 0,
  mealsDataHandler: () => {},
  cartCountHandler: () => {},
});

const totalReducer = (state, action) => {
  if (action.type === "MEALS_COUNT") {
    let totalMeals = 0;
    action.mealData.forEach((meal) => (totalMeals = totalMeals + meal.count));
    return { totalBill: state.totalBill, totalMeals: totalMeals };
  }
  if (action.type === "BILL_COUNT") {
    let totalBill = 0.0;
    action.mealData.forEach((meal) => (totalBill = totalBill + meal.totalCost));
    return { totalBill: totalBill, totalMeals: state.totalMeals };
  }
};

export const MealsContextProvider = (props) => {
  const [mealData, setMealData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const mealsDataHandler = (id, name, count, totalCost) => {
    let newMealData = mealData;
    const currentMealIndex = newMealData.findIndex((meal) => meal.id === id);

    if (currentMealIndex !== -1) {
      newMealData[currentMealIndex].count = count;
      newMealData[currentMealIndex].totalCost = totalCost;
      setMealData(newMealData);
    } else {
      setMealData((prevState) => {
        return [
          ...prevState,
          {
            id: id,
            name: name,
            count: count,
            totalCost: totalCost,
          },
        ];
      });
    }
  };

  const [totals, dispatchTotals] = useReducer(totalReducer, {
    totalMeals: 0,
    totalCost: 0,
  });

  return (
    <MealsContext.Provider
      value={{
        mealData: mealData,
        // totalCost: totals.totalCost,
        // totalMeals: totals.totalMeals,
        mealsDataHandler: mealsDataHandler,
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
