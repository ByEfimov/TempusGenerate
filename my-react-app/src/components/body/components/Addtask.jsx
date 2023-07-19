import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddTask(props) {
  const { setOpenAdd, dayOpen } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const dispatch = useDispatch();
  const [inputDate, setInputDate] = useState(dayOpen);
  const [inputName, setInputName] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const RefAddtask = React.createRef();

  function GoBack() {
    RefAddtask.current.style.cssText = "animation: 0.5s CloseAddTask forwards;";
    setTimeout(() => {
      setOpenAdd(false);
    }, 500);
  }

  function findMaxid() {
    let result = 0;
    UserTasks.map((item) => {
      if (item.id > result) {
        result = item.id;
      }
    });
    result++;
    return result;
  }

  function Addtask() {
    if (inputPriority > 0 && inputName != "") {
      const NewTask = {
        id: findMaxid(),
        TaskName: inputName,
        TaskSatus: "Make",
        TaskPriority: Number(inputPriority),
        date: inputDate,
      };
      dispatch({ type: "ADD_TASK", payload: NewTask });
      console.log(UserTasks);
      GoBack();
    }
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
      <input
        type="number"
        max="3"
        min="1"
        className="Priority"
        list="priorites"
        value={inputPriority}
        onChange={(e) =>
          e.target.value >= 0 && e.target.value < 4
            ? setInputPriority(e.target.value)
            : ""
        }
        placeholder="Приоритет"
      />
      <datalist id="priorites">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </datalist>

      <button className="AddTaskButton" onClick={Addtask}>
        Добавить задачу
      </button>

      <div className="GoBack s bg" onClick={GoBack}></div>
    </div>
  );
}
export default AddTask;
