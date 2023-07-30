import NoHaveTasks from "../../../components/buttons/nohavetasks";
import AddButton from "../../../components/buttons/AddButton";
import AddTask from "../../../logic-task/AddTask";
import { nextDate } from "../../../utils/time";
import { useSelector } from "react-redux";
import { sortedTasksNextDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import businessIcon from "../../../assets/light/info-circle.svg";
import businessIconD from "../../../assets/dark/info-circle.svg";
import { useTheme } from "../../../hooks/UseTheme";
import TaskRender from "../../../components/render/TaskRender";
import BusinessMode from "../../busines-mode.jsx";
import { useState } from "react";
import AddPlanButton from "../../../components/buttons/addPlanButton";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";

function TommorowPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const { theme } = useTheme();
  const [openPlan, setOpenPlan] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasksNextDay(UserTasks, nextDate).length > 0 ||
        UserTasks.some((task) => task.TaskSatus === "Plan") ? (
          <div className="groups">
            {UserTasks.some((task) => task.TaskSatus === "Plan") ? (
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
                          date={nextDate()}
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

            {sortedTasksNextDay(UserTasks, nextDate).some(
              (task) => task.TaskSatus === "Make"
            ) ? (
              <div className="group">
                <div className="title">
                  Задачи
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
      <AddPlanButton setOpenPlan={setOpenPlan}></AddPlanButton>
      {sortedTasksNextDay(UserTasks, nextDate).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {OpenAdd ? (
        <AddTask
          openPlan={openPlan}
          dayOpen={nextDate()}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
      {BusinesModeOpen ? (
        <BusinessMode
          filtredTasks={sortedTasksNextDay(UserTasks, nextDate)}
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
export default TommorowPlace;
