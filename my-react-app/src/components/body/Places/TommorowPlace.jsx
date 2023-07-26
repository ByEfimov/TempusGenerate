import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { nextDate } from "../logic/time";
import DeleteTask from "../logic/deleteTask";
import { SelectTask } from "../logic/selectTask";
import { useSelector } from "react-redux";
import { sortedTasksNextDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";

function TommorowPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasksNextDay(UserTasks, nextDate).length > 0 ? (
          sortedTasksNextDay(UserTasks, nextDate).map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
                id={task.id}
                onClick={SelectTask}
                key={task.id}
              >
                <input
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Завтра</div>
                <div className="dellButton" onClick={DeleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks
            setOpenAdd={setOpenAdd}
            page="TommorowPlace"
          ></NoHaveTasks>
        )}
      </div>
      {sortedTasksNextDay(UserTasks, nextDate).length > 0 ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {OpenAdd ? (
        <AddTask dayOpen={nextDate()} setOpenAdd={setOpenAdd}></AddTask>
      ) : (
        ""
      )}
    </section>
  );
}
export default TommorowPlace;
