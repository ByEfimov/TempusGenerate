import { SelectTask } from "../../logic-task/selectTask";
import { useTheme } from "../../hooks/UseTheme";
import backL from "../../assets/light/backet.svg";
import back from "../../assets/dark/backet.svg";
import edit from "../../assets/dark/edit.svg";
import editL from "../../assets/light/edit.svg";
import { EditTask } from "../../logic-task/editTask";
import { useSelector } from "react-redux";
import { Animate } from "../../assets/animations";
import { findMaxid } from "../../utils/findMaxid";
import { useDispatch } from "react-redux";

export default function TaskRender(props) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { task, Day, itsPlan, date } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);

  function selectTaskPlan(e) {
    UserTasks.map((task) => {
      if (task.planId == e.target.id) {
        const NewTask = {
          id: findMaxid(UserTasks),
          TaskName: task.TaskName,
          TaskSatus: "Done",
          TaskPriority: task.FirstPrior,
          date: date,
          FirstPrior: task.FirstPrior,
        };
        dispatch({ type: "ADD_TASK", payload: NewTask });
        Animate(e.target, "TaskDell", "300");
        setTimeout(() => {
          dispatch({
            type: "ADD_TO_SELECTON",
            taskId: task.id,
            newValue: date,
          });
        }, 300);
      }
    });
  }

  function DeleteTask(e) {
    Animate(e.target.parentNode, "TaskDell", "300");
    setTimeout(() => {
      dispatch({
        type: "REMOVE_TASK",
        payload: e.target.parentNode.id - 1,
      });
    }, 300);
  }

  async function selectTask(e) {
    const NewStatus = await SelectTask(e);
    Animate(e.target, "TaskDell", "300");
    setTimeout(() => {
      task.TaskSatus = NewStatus[1];
      dispatch({
        type: "CHANGE_TASK",
        taskId: e.target.id,
        newStatus: NewStatus[1],
      });
      dispatch({
        type: "CHANGE_PRIOR",
        taskId: e.target.id,
        newPriority:
          NewStatus[1] == "Done"
            ? NewStatus[0].FirstPrior + 1000
            : NewStatus[0].FirstPrior,
      });
    }, 300);
  }

  return (
    <div
      className={task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"}
      onClick={itsPlan ? selectTaskPlan : selectTask}
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
