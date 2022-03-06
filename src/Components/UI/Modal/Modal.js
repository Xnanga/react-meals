import { useState, useContext } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import MealsContext from "../../../Context/meals-context";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const ctx = useContext(MealsContext);

  return (
    <>
      {ctx.modalVisible &&
        ReactDOM.createPortal(
          <Backdrop clickAction={ctx.setModalVisible}>
            <div className={styles.modal}>MODAL</div>
          </Backdrop>,
          document.getElementById("backdrop-root")
        )}
    </>
  );
};

export default Modal;
