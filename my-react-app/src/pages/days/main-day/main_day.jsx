import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "../../../components/buttons/AddButton";
import AddTask from "../../modal-windows/add_modal/AddtaskPlace";
import { thisDate } from "../../../utils/time";
import { sortedTasksToDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../../../components/render/TaskRender";
import NoHaveTasks from "../../../components/buttons/nohavetasks";
import BusinessMode from "../../busines-mode.jsx";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";
import AddPlanButton from "../../../components/buttons/addPlanButton";
import { searchSelect } from "../../../utils/seachSelectTask";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const [openPlan, setOpenPlan] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  const ArrayPlans = [];
  UserTasks.map((task) =>
    searchSelect(task, thisDate()) ? ArrayPlans.push(task) : ""
  );

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ||
        UserTasks.some((task) => task.TaskSatus === "Plan") ? (
          <div className="groups">
            {UserTasks.some((task) => task.TaskSatus == "Plan") &&
            ArrayPlans.length > 0 ? (
              <div className="group">
                <div className="title">Планы</div>
                <div className="tasks">
                  {ArrayPlans.map((task) => (
                    <TaskRender
                      itsPlan={true}
                      task={task}
                      Day={"План"}
                      date={thisDate()}
                      key={task.planId}
                    ></TaskRender>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {sortedTasksToDay(UserTasks, thisDate).some(
              (task) => task.TaskSatus === "Make"
            ) ? (
              <div className="group">
                <div className="title" onClick={OpenBussinesMode}>
                  Задачи
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="var(--textColor)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V13"
                      stroke="var(--textColor)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9946 16H12.0036"
                      stroke="var(--textColor)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="tasks">
                  {sortedTasksToDay(UserTasks, thisDate).map((task) => {
                    if (task.TaskSatus == "Make") {
                      return (
                        <TaskRender task={task} key={task.id}></TaskRender>
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
                        <TaskRender task={task} key={task.id}></TaskRender>
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
