import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import NoHaveTasks from "../../../components/buttons/nohavetasks";
import AddButton from "../../../components/buttons/AddButton";
import AddTaskPlace from "../../modal-windows/add_modal/AddtaskPlace";
import { sortedTasksSelectDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../../../components/render/TaskRender";
import GoBackComp from "../../../components/buttons/GoBack";
import AddPlanButton from "../../../components/buttons/addPlanButton";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";
import BusinessMode from "../../busines-mode.jsx";
import { searchSelect } from "../../../utils/seachSelectTask";
import { Animate } from "../../../assets/animations";

function SelectDay(props) {
  const { setOpenSelect, allBody, setSelectTilte, clickDay } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const RefSelectDay = React.createRef();
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [openPlan, setOpenPlan] = useState(false);
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  function FormatDayToDate(day) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function GoBack() {
    Animate(RefSelectDay.current, "closeSelect", "300");
    setTimeout(() => {
      setOpenSelect(false);
      setSelectTilte("Все дни");
      Animate(allBody.current, "AllShow", "300");
    }, 250);
  }

  useEffect(() => {
    props.setSelectTilte(FormatDayToDate(clickDay));
  });

  const ArrayPlans = [];
  UserTasks.map((task) =>
    searchSelect(task, FormatDayToDate(clickDay)) ? ArrayPlans.push(task) : ""
  );

  return (
    <div className="place selectDay" ref={RefSelectDay}>
      <div className="scroll">
        {sortedTasksSelectDay(UserTasks, FormatDayToDate, clickDay).length ||
        UserTasks.some((task) => task.TaskSatus === "Plan") > 0 ? (
          <div className="groups">
            {UserTasks.some((task) => task.TaskSatus === "Plan") &&
            ArrayPlans.length > 0 ? (
              <div className="group">
                <div className="title">Планы</div>
                <div className="tasks">
                  {ArrayPlans.map((task) => (
                    <TaskRender
                      itsPlan={true}
                      task={task}
                      Day={"План"}
                      date={FormatDayToDate(clickDay)}
                      key={task.planId}
                    ></TaskRender>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {sortedTasksSelectDay(UserTasks, FormatDayToDate, clickDay).some(
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
                  {sortedTasksSelectDay(
                    UserTasks,
                    FormatDayToDate,
                    clickDay
                  ).map((task) => {
                    if (task.TaskSatus == "Make") {
                      return (
                        <TaskRender
                          task={task}
                          Day={
                            task.date[5] +
                            task.date[6] +
                            task.date[7] +
                            task.date[8] +
                            task.date[9]
                          }
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

            {sortedTasksSelectDay(UserTasks, FormatDayToDate, clickDay).some(
              (task) => task.TaskSatus === "Done"
            ) ? (
              <div className="group">
                <div className="title">Выполнено</div>
                <div className="tasks">
                  {sortedTasksSelectDay(
                    UserTasks,
                    FormatDayToDate,
                    clickDay
                  ).map((task) => {
                    if (task.TaskSatus == "Done") {
                      return (
                        <TaskRender
                          task={task}
                          Day={
                            task.date[5] +
                            task.date[6] +
                            task.date[7] +
                            task.date[8] +
                            task.date[9]
                          }
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
          <NoHaveTasks setOpenAdd={setOpenAdd}></NoHaveTasks>
        )}
      </div>
      <AddPlanButton setOpenPlan={setOpenPlan}></AddPlanButton>
      {sortedTasksSelectDay(UserTasks, FormatDayToDate, clickDay).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {sortedTasksSelectDay(UserTasks, FormatDayToDate, clickDay).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <GoBackComp isS={false} GoBack={GoBack}></GoBackComp>
      ) : (
        <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
      )}
      {OpenAdd ? (
        <AddTaskPlace
          openPlan={openPlan}
          dayOpen={FormatDayToDate(clickDay)}
          setOpenAdd={setOpenAdd}
        ></AddTaskPlace>
      ) : (
        ""
      )}
      {BusinesModeOpen ? (
        <BusinessMode
          filtredTasks={sortedTasksSelectDay(
            UserTasks,
            FormatDayToDate,
            clickDay
          )}
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
    </div>
  );
}
export default SelectDay;
