import React, { useReducer, useState } from "react";

const MealsContext = React.createContext({
  mealData: [],
  totalCost: 0,
  overallTotals: 0,
  MEAL_ACTION: {},
  modalVisible: false,

  mealsDataHandler: () => {},
  cartCountHandler: () => {},
  dispatchMealData: () => {},
});

const MEAL_ACTION = {
  addMeals: "addMeals",
  removeMeals: "removeMeals",
};

const mealReducer = (state, action) => {
  if (action.type === "addMeals") {
    let newMealData = state.currentMeals;
    const currentMealIndex = newMealData.findIndex(
      (meal) => meal.id === action.data.id
    );

    if (currentMealIndex > -1) {
      return {
        totalCount: state.totalCount + 1,
        totalBill: state.totalBill + action.data.mealPrice,
        currentMeals: [
          ...newMealData.slice(0, currentMealIndex),
          {
            ...newMealData[currentMealIndex],
            count: newMealData[currentMealIndex].count + 1,
          },
          ...newMealData.slice(currentMealIndex + 1),
        ],
      };
    }

    if (currentMealIndex === -1) {
      const newMeal = {
        id: action.data.id,
        name: action.data.mealName,
        price: action.data.mealPrice,
        count: 1,
      };
      return {
        totalCount: state.totalCount + 1,
        totalBill: state.totalBill + action.data.mealPrice,
        currentMeals: [...state.currentMeals, newMeal],
      };
    }
  } else {
    return state;
  }
};

export const MealsContextProvider = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mealData, dispatchMealData] = useReducer(mealReducer, {
    currentMeals: [],
    totalCount: 0,
    totalBill: 0,
  });

  return (
    <MealsContext.Provider
      value={{
        mealData: mealData,
        MEAL_ACTION: MEAL_ACTION,
        totalMealCount: mealData.totalCount,
        modalVisible: modalVisible,
        setModalVisible: setModalVisible,
        dispatchMealData: dispatchMealData,
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
