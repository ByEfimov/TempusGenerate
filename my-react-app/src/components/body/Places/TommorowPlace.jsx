import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { nextDate } from "../logic/time";
import { useSelector } from "react-redux";
import { sortedTasksNextDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../components/TaskRender";

function TommorowPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasksNextDay(UserTasks, nextDate).length > 0 ? (
          <div className="groups">
            {sortedTasksNextDay(UserTasks, nextDate).some(
              (task) => task.TaskSatus === "Plan"
            ) ? (
              <div className="group">
                <div className="title">Планы</div>
                <div className="tasks">
                  {sortedTasksNextDay(UserTasks, nextDate).map((task) => {
                    if (task.TaskSatus == "Plan") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Завтра"}
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

            {sortedTasksNextDay(UserTasks, nextDate).some(
              (task) => task.TaskSatus === "Make"
            ) ? (
              <div className="group">
                <div className="title">Задачи</div>
                <div className="tasks">
                  {sortedTasksNextDay(UserTasks, nextDate).map((task) => {
                    if (task.TaskSatus == "Make") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Завтра"}
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

            {sortedTasksNextDay(UserTasks, nextDate).some(
              (task) => task.TaskSatus === "Done"
            ) ? (
              <div className="group">
                <div className="title">Выполнено</div>
                <div className="tasks">
                  {sortedTasksNextDay(UserTasks, nextDate).map((task) => {
                    if (task.TaskSatus == "Done") {
                      return (
                        <TaskRender
                          task={task}
                          Day={"Завтра"}
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
