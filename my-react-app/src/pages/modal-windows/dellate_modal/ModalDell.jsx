import { createRef } from "react";
import { Animate } from "../../../assets/animations";
import { useDispatch } from "react-redux";

export default function ModalDell(props) {
  const { modalDellateOpen, setModalDellateOpen } = props;
  const dispatch = useDispatch();
  function DeleteTask() {
    Animate(modalDellateOpen.parentNode, "TaskDell", "300");
    setTimeout(() => {
      dispatch({
        type: "REMOVE_TASK",
        payload: modalDellateOpen.parentNode.id - 1,
      });
    }, 300);
  }

  const ModalRename = createRef();
  return (
    <div className="ModalRename" ref={ModalRename}>
      <div
        className="bg"
        onClick={() => {
          Animate(ModalRename.current, "TaskDell", "300");
          setTimeout(() => {
            setModalDellateOpen(false);
          }, 300);
        }}
      ></div>
      <div className="ModalRename-body">
        <h1>Удалить?</h1>
        <button
          onClick={() => {
            DeleteTask();
            Animate(ModalRename.current, "TaskDell", "300");
            setTimeout(() => {
              setModalDellateOpen(false);
            }, 300);
          }}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
}
