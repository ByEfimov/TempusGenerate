import { useState } from "react";
import GoBackComp from "../components/GoBack";
import { DellDispatch } from "../Body";

function BusinessMode(props) {
  const { filtredTasks, setBusinesMode } = props;
  const [numberToShow] = useState(0);

  function GoBack() {
    setBusinesMode(false);
  }

  function NextTask() {
    console.log(filtredTasks[numberToShow].id);
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
  }

  return (
    <div className="BusinesMode">
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
