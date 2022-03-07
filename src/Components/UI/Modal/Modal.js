import { useContext } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import MealsContext from "../../../Context/meals-context";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const ctx = useContext(MealsContext);

  const modalVisiblityHandler = (e) => {
    if (e.target.id === "backdrop") ctx.setModalVisible(false);
  };

  return (
    <>
      {ctx.modalVisible &&
        ReactDOM.createPortal(
          <Backdrop id="backdrop" clickAction={(e) => modalVisiblityHandler(e)}>
            <div className={styles.modal}>{props.children}</div>
          </Backdrop>,
          document.getElementById("backdrop-root")
        )}
    </>
  );
};

export default Modal;
