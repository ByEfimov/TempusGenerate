import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { thisDate } from "../logic/time";
import { SelectTask } from "../logic/selectTask";
import DeleteTask from "../logic/deleteTask";
import { useSelector } from "react-redux";
import { sortedTasksToDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ? (
          sortedTasksToDay(UserTasks, thisDate).map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
                onClick={SelectTask}
                id={task.id}
                key={task.id}
              >
                <input
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Сегодня</div>
                <div className="dellButton" onClick={DeleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks page="MainPlace" setOpenAdd={setOpenAdd}></NoHaveTasks>
        )}
      </div>
      {sortedTasksToDay(UserTasks, thisDate).length > 0 ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {OpenAdd ? (
        <AddTask dayOpen={thisDate()} setOpenAdd={setOpenAdd}></AddTask>
      ) : (
        ""
      )}
    </section>
  );
}
export default MainPlace;
