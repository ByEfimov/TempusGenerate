import { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Animate } from "../../../assets/animations";

export let inputValueExport = "";

export default function ModalRename(props) {
  const { setModalRenameOpen, modalRenameOpen } = props;
  const [inputValue, setInputValue] = useState();
  inputValueExport = inputValue;
  const ModalRename = createRef();
  const dispatch = useDispatch();

  function EditTask() {
    const NewTaskName = inputValueExport;
    if (NewTaskName != "" && NewTaskName) {
      dispatch({
        type: "CHANGE_TASK_NAME",
        taskId: modalRenameOpen.parentNode.id,
        newTaskName: NewTaskName,
      });
    }
  }

  return (
    <div className="ModalRename" ref={ModalRename}>
      <div
        className="bg"
        onClick={() => {
          Animate(ModalRename.current, "TaskDell", "300");
          setTimeout(() => {
            setModalRenameOpen(false);
          }, 300);
        }}
      ></div>
      <div className="ModalRename-body">
        <h1>Новое название</h1>
        <input
          type="text"
          placeholder="Название"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            EditTask();
            Animate(ModalRename.current, "TaskDell", "300");
            setTimeout(() => {
              setModalRenameOpen(false);
            }, 300);
          }}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
}
