import { SelectTask } from "../../logic-task/selectTask";
import DeleteTask from "../../logic-task/deleteTask";
import { useTheme } from "../../hooks/UseTheme";
import backL from "../../assets/light/backet.svg";
import back from "../../assets/dark/backet.svg";
import edit from "../../assets/dark/edit.svg";
import editL from "../../assets/light/edit.svg";
import { EditTask } from "../../logic-task/editTask";
import { useSelector } from "react-redux";
import { DellDispatch } from "../../pages/body/index";
import { Animate } from "../../assets/animations";

export default function TaskRender(props) {
  const { theme } = useTheme();
  const { task, Day, itsPlan, date } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);

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

  function selectTaskPlan(e) {
    UserTasks.map((task) => {
      if (task.planId == e.target.id) {
        const NewTask = {
          id: findMaxid(),
          TaskName: task.TaskName,
          TaskSatus: "Done",
          TaskPriority: task.FirstPrior,
          date: date,
          FirstPrior: task.FirstPrior,
        };
        DellDispatch({ type: "ADD_TASK", payload: NewTask });
        Animate(e.target, "TaskDell", "300");
        setTimeout(() => {
          DellDispatch({
            type: "ADD_TO_SELECTON",
            taskId: task.id,
            newValue: date,
          });
        }, 300);
      }
    });
  }

  return (
    <div
      className={task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"}
      onClick={itsPlan ? selectTaskPlan : SelectTask}
      id={task.id}
    >
      <input
        defaultChecked={task.TaskSatus === "Done" ? true : false}
        className="CheckBox"
        type="checkbox"
      />
      <label className="Label">{task.TaskName}</label>
      <div className="date">{Day}</div>
      {itsPlan ? (
        ""
      ) : (
        <div className="dellButton" onClick={DeleteTask}>
          {theme === "LTempus" ? (
            <img src={backL} alt="" />
          ) : (
            <img src={back} alt="" />
          )}
        </div>
      )}
      {itsPlan ? (
        ""
      ) : (
        <div className="editButton" onClick={EditTask}>
          {theme === "LTempus" ? (
            <img src={editL} alt="" />
          ) : (
            <img src={edit} alt="" />
          )}
        </div>
      )}
    </div>
  );
}
