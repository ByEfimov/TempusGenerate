import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "../../../components/buttons/AddButton";
import AddTask from "../../modal-windows/add_modal/AddtaskPlace";
import { thisDate } from "../../../utils/time";
import { sortedTasksToDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../../../components/render/TaskRender";
import businessIcon from "../../../assets/light/info-circle.svg";
import businessIconD from "../../../assets/dark/info-circle.svg";
import { useTheme } from "../../../hooks/UseTheme";
import NoHaveTasks from "../../../components/buttons/nohavetasks";
import BusinessMode from "../../busines-mode.jsx";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";
import AddPlanButton from "../../../components/buttons/addPlanButton";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const { theme } = useTheme();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const [openPlan, setOpenPlan] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ||
        UserTasks.some((task) => task.TaskSatus === "Plan") ? (
          <div className="groups">
            {UserTasks.some((task) => task.TaskSatus == "Plan") ? (
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
                  {UserTasks.map((task) => {
                    if (task.TaskSatus == "Plan") {
                      return (
                        <TaskRender
                          itsPlan={true}
                          task={task}
                          Day={"План"}
                          date={thisDate()}
                          key={task.planId}
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
                  Задачи
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
      <AddPlanButton setOpenPlan={setOpenPlan}></AddPlanButton>
      {sortedTasksToDay(UserTasks, thisDate).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <div className="buttons">
          <AddButton setOpenAdd={setOpenAdd}></AddButton>
        </div>
      ) : (
        ""
      )}
      {OpenAdd ? (
        <AddTask
          openPlan={openPlan}
          dayOpen={thisDate()}
          setOpenAdd={setOpenAdd}
        ></AddTask>
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
      {openPlan ? (
        <PlanPlace
          setOpenAdd={setOpenAdd}
          setOpenPlan={setOpenPlan}
        ></PlanPlace>
      ) : (
        ""
      )}
    </section>
  );
}
export default MainPlace;
