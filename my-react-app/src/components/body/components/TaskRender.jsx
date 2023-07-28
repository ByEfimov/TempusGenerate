import { SelectTask } from "../logic/selectTask";
import DeleteTask from "../logic/deleteTask";
import { useTheme } from "../../../hooks/UseTheme";
import backL from "../../../assets/light/backet.svg";
import back from "../../../assets/dark/backet.svg";
import edit from "../../../assets/dark/edit.svg";
import editL from "../../../assets/light/edit.svg";
import { EditTask } from "../logic/editTask";

export default function TaskRender(props) {
  const { theme } = useTheme();
  const { task, Day } = props;
  return (
    <div
      className={task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"}
      onClick={SelectTask}
      id={task.id}
    >
      <input
        defaultChecked={task.TaskSatus === "Done" ? true : false}
        className="CheckBox"
        type="checkbox"
      />
      <label className="Label">{task.TaskName}</label>
      <div className="date">{Day}</div>
      <div className="dellButton" onClick={DeleteTask}>
        {theme === "LTempus" ? (
          <img src={backL} alt="" />
        ) : (
          <img src={back} alt="" />
        )}
      </div>
      <div className="editButton" onClick={EditTask}>
        {theme === "LTempus" ? (
          <img src={editL} alt="" />
        ) : (
          <img src={edit} alt="" />
        )}
      </div>
    </div>
  );
}
