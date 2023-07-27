import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { thisDate } from "../logic/time";
import { useSelector } from "react-redux";
import { sortedTasksToDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../components/TaskRender";
import businessIcon from "../../../assets/light/info-circle.svg";
import businessIconD from "../../../assets/dark/info-circle.svg";
import { useTheme } from "../../../hooks/UseTheme";
import { useState } from "react";
import BusinessMode from "./businesMode";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const { theme } = useTheme();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ? (
          <div className="groups">
            {sortedTasksToDay(UserTasks, thisDate).some(
              (task) => task.TaskSatus === "Plan"
            ) ? (
              <div className="group">
                <div className="title">
                  Планы
                  {theme == "LTempus" ? (
                    <img src={businessIcon} alt="" onClick={OpenBussinesMode} />
                  ) : (
                    <img
                      src={businessIconD}
                      alt=""
                      onClick={OpenBussinesMode}
                    />
                  )}
                </div>
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
                <div className="title">
                  Задачи{" "}
                  {theme == "LTempus" ? (
                    <img src={businessIcon} onClick={OpenBussinesMode} alt="" />
                  ) : (
                    <img
                      src={businessIconD}
                      onClick={OpenBussinesMode}
                      alt=""
                    />
                  )}
                </div>
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
      {BusinesModeOpen ? (
        <BusinessMode
          filtredTasks={sortedTasksToDay(UserTasks, thisDate)}
          setBusinesMode={setBusinesModeOpen}
        ></BusinessMode>
      ) : (
        ""
      )}
    </section>
  );
}
export default MainPlace;
