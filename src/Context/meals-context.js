import React, { useReducer, useState } from "react";

const MealsContext = React.createContext({
  mealData: [],
  MEAL_ACTION: {},
  modalVisible: false,
  totalMealCount: 0,
  totalBill: 0,

  dispatchMealData: () => {},
  setModalVisible: () => {},
});

const MEAL_ACTION = {
  addMeals: "addMeals",
  removeMeals: "removeMeals",
};

const roundToDecimalPlaces = (num, decimalPlaces) => {
  return Number(
    Math.round(parseFloat(num + "e" + decimalPlaces)) + "e-" + decimalPlaces
  );
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
        totalBill: roundToDecimalPlaces(
          state.totalBill + action.data.mealPrice,
          2
        ),
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
        totalBill: roundToDecimalPlaces(
          state.totalBill + action.data.mealPrice,
          2
        ),
        currentMeals: [...state.currentMeals, newMeal],
      };
    }
  }

  if (action.type === "removeMeals") {
    let newMealData = state.currentMeals;
    const currentMealIndex = newMealData.findIndex(
      (meal) => meal.id === action.data.id
    );

    if (currentMealIndex > -1) {
      return {
        totalCount: state.totalCount - 1,
        totalBill: roundToDecimalPlaces(
          state.totalBill - action.data.mealPrice,
          2
        ),
        currentMeals: [
          ...newMealData.slice(0, currentMealIndex),
          {
            ...newMealData[currentMealIndex],
            count: newMealData[currentMealIndex].count - 1,
          },
          ...newMealData.slice(currentMealIndex + 1),
        ],
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
        totalBill: mealData.totalBill,
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
