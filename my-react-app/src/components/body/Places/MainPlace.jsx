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
          <div className="groups">
            {sortedTasksToDay(UserTasks, thisDate).some(
              (task) => task.TaskSatus === "Plan"
            ) ? (
              <div className="group">
                <div className="title">Планы</div>
                <div className="tasks">
                  {sortedTasksToDay(UserTasks, thisDate).map((task) => {
                    if (task.TaskSatus == "Plan") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Сегодня"}
                          key={task.id}
                        ></TaskRender>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              ""
            )}

            {sortedTasksToDay(UserTasks, thisDate).some(
              (task) => task.TaskSatus === "Make"
            ) ? (
              <div className="group">
                <div className="title">Задачи</div>
                <div className="tasks">
                  {sortedTasksToDay(UserTasks, thisDate).map((task) => {
                    if (task.TaskSatus == "Make") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Сегодня"}
                          key={task.id}
                        ></TaskRender>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              ""
            )}

            {sortedTasksToDay(UserTasks, thisDate).some(
              (task) => task.TaskSatus === "Done"
            ) ? (
              <div className="group">
                <div className="title">Выполнено</div>
                <div className="tasks">
                  {sortedTasksToDay(UserTasks, thisDate).map((task) => {
                    if (task.TaskSatus == "Done") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Сегодня"}
                          key={task.id}
                        ></TaskRender>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
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
