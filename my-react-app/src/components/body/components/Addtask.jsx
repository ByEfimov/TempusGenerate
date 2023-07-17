import { useState } from "react";
import LocalSave from "../../../storage/LocalStorageConfigurate";

function AddTask(props) {
  const { setOpenAdd, dayOpen, UserData, GoBackSelect } = props;

  const [inputDate, setInputDate] = useState(dayOpen);
  const [inputName, setInputName] = useState("");
  const [inputPriority, setInputPriority] = useState("");

  function GoBack() {
    document.querySelector(".AddTask").style.cssText =
      "animation: 0.5s CloseAddTask forwards;";
    setTimeout(() => {
      setOpenAdd(false);
    }, 500);
  }

  function findMaxid() {
    let result = 0;
    UserData[0].userTasks.map((item) => {
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
        TaskPriority: inputPriority,
        date: inputDate,
      };
      UserData[0].userTasks.push(NewTask);
      LocalSave("storage", UserData[0].userTasks);
      GoBackSelect ? GoBackSelect() : "";
      GoBack();
    }
  }

  return (
    <div className="AddTask">
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
