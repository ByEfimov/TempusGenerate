import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { thisDate } from "../logic/time";
import { useSelector } from "react-redux";
import { sortedTasksToDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../components/TaskRender";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ? (
          sortedTasksToDay(UserTasks, thisDate).map((task) => {
            return (
              <TaskRender
                task={task}
                Day={"Сегодня"}
                key={task.id}
              ></TaskRender>
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
