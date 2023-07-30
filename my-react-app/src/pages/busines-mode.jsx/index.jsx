import { createRef, useState } from "react";
import GoBackComp from "../../components/buttons/GoBack";
import { DellDispatch } from "../body/index";

function BusinessMode(props) {
  const { filtredTasks, setBusinesMode } = props;
  const [numberToShow] = useState(0);
  const BusinesMode = createRef();

  function GoBack() {
    BusinesMode.current.style.cssText =
      "animation: SettingsDell 500ms forwards;";
    setTimeout(() => {
      setBusinesMode(false);
    }, 500);
  }

  function NextTask(e) {
    const timeout = 500;
    let idTimeout;
    e.target.addEventListener("touchstart", function () {
      idTimeout = setTimeout(function () {
        filtredTasks.map((task) => {
          if (task.id == filtredTasks[numberToShow].id) {
            console.log(task.TaskName);
            task.TaskSatus = "Done";
            DellDispatch({
              type: "CHANGE_TASK",
              taskId: filtredTasks[numberToShow].id,
              newStatus: "Done",
            });
            DellDispatch({
              type: "CHANGE_PRIOR",
              taskId: filtredTasks[numberToShow].id,
              newPriority: task.FirstPrior + 1000,
            });
          }
        });
      }, timeout);
    });
    e.target.addEventListener("mousedown", function () {
      idTimeout = setTimeout(function () {
        filtredTasks.map((task) => {
          if (task.id == filtredTasks[numberToShow].id) {
            console.log(task.TaskName);
            task.TaskSatus = "Done";
            DellDispatch({
              type: "CHANGE_TASK",
              taskId: filtredTasks[numberToShow].id,
              newStatus: "Done",
            });
            DellDispatch({
              type: "CHANGE_PRIOR",
              taskId: filtredTasks[numberToShow].id,
              newPriority: task.FirstPrior + 1000,
            });
          }
        });
      }, timeout);
    });

    e.target.addEventListener("mouseup", function () {
      clearTimeout(idTimeout);
    });
    e.target.addEventListener("touchend", function () {
      clearTimeout(idTimeout);
    });
  }

  return (
    <div className="BusinesMode" ref={BusinesMode}>
      <div className="task_name">
        {filtredTasks.some((task) => task.TaskSatus === "Make")
          ? filtredTasks[numberToShow].TaskName
          : "Задачи закончились"}
      </div>
      <button className="button" onClick={NextTask}>
        <div className="button-text">Зажми!</div>
      </button>
      <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
    </div>
  );
}
export default BusinessMode;
