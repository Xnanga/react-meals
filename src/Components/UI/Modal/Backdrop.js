import { useContext } from "react";

import MealsContext from "../../../Context/meals-context";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  const ctx = useContext(MealsContext);

  return (
    <div
      className={`${styles.backdrop} ${
        ctx.modalVisible ? styles["backdrop-active"] : ""
      }`}
      onClick={() => props.clickAction(false)}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
