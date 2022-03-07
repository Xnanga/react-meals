import { useContext } from "react";

import MealsContext from "../../../Context/meals-context";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  const ctx = useContext(MealsContext);

  return (
    <div
      id={props.id}
      className={`${styles.backdrop} ${
        ctx.modalVisible ? styles["backdrop-active"] : ""
      }`}
      onClick={(e) => props.clickAction(e)}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
