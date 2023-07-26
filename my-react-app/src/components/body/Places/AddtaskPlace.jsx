import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddTask from "../logic/AddTask";

function AddTaskPlace(props) {
  const { setOpenAdd, dayOpen } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const dispatch = useDispatch();
  const [inputDate, setInputDate] = useState(dayOpen);
  const [inputName, setInputName] = useState("");
  const RefAddtask = React.createRef();

  function GoBack() {
    RefAddtask.current.style.cssText = "animation: 0.5s CloseAddTask forwards;";
    setTimeout(() => {
      setOpenAdd(false);
    }, 500);
  }

  function Addhendler() {
    AddTask(inputName, inputDate, GoBack, UserTasks, dispatch);
  }

  return (
    <div ref={RefAddtask} className="AddTask">
      <input
        type="text"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        className="Name"
        placeholder="Название задачи"
      />
      <input
        type="date"
        className="date inputDate"
        value={inputDate}
        onChange={(e) => {
          setInputDate(e.target.value);
        }}
        placeholder="Дата"
      />
      <select
        type="number"
        max="3"
        min="1"
        className="Priority"
        list="priorites"
        placeholder="Приоритет"
      >
        <option>Сверху</option>
        <option selected>Снизу</option>
      </select>

      <button className="AddTaskButton" onClick={Addhendler}>
        Добавить задачу
      </button>

      <div className="GoBack s bg" onClick={GoBack}></div>
    </div>
  );
}
export default AddTaskPlace;
