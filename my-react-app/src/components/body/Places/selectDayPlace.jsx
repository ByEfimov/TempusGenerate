import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { sortedTasksSelectDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../components/TaskRender";
import GoBackComp from "../components/GoBack";
import businessIcon from "../../../assets/light/info-circle.svg";
import businessIconD from "../../../assets/dark/info-circle.svg";
import { useTheme } from "../../../hooks/UseTheme";
import AddPlanButton from "../components/addPlanButton";
import PlanPlace from "./PlanPlace";
import BusinessMode from "./businesMode";

function SelectDay(props) {
  const { setOpenSelect, allBody, setSelectTilte, clickDay } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const RefSelectDay = React.createRef();
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const { theme } = useTheme();
  const [openPlan, setOpenPlan] = useState(false);
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  function selectDate(day) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function GoBack() {
    RefSelectDay.current.style.cssText =
      "animation: 0.3s closeSelect forwards;";
    setTimeout(() => {
      setOpenSelect(false);
      setSelectTilte("Все дни");
      allBody.current.style.cssText = "animation: AllShow 300ms forwards;";
    }, 250);
  }

  useEffect(() => {
    props.setSelectTilte(selectDate(clickDay));
  });

  return (
    <div className="place selectDay" ref={RefSelectDay}>
      <div className="scroll">
        {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length ||
        UserTasks.some((task) => task.TaskSatus === "Plan") > 0 ? (
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
                          date={selectDate()}
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
            {sortedTasksSelectDay(UserTasks, selectDate, clickDay).some(
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
                  {sortedTasksSelectDay(UserTasks, selectDate, clickDay).map(
                    (task) => {
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
                    }
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            {sortedTasksSelectDay(UserTasks, selectDate, clickDay).some(
              (task) => task.TaskSatus === "Done"
            ) ? (
              <div className="group">
                <div className="title">Выполнено</div>
                <div className="tasks">
                  {sortedTasksSelectDay(UserTasks, selectDate, clickDay).map(
                    (task) => {
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
                    }
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <NoHaveTasks setOpenAdd={setOpenAdd} page="MainPlace"></NoHaveTasks>
        )}
      </div>
      <AddPlanButton setOpenPlan={setOpenPlan}></AddPlanButton>
      {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length > 0 ||
      UserTasks.some((task) => task.TaskSatus === "Plan") ? (
        <GoBackComp isS={false} GoBack={GoBack}></GoBackComp>
      ) : (
        <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
      )}
      {OpenAdd ? (
        <AddTask
          openPlan={openPlan}
          dayOpen={selectDate(clickDay)}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
      {BusinesModeOpen ? (
        <BusinessMode
          filtredTasks={sortedTasksSelectDay(UserTasks, selectDate, clickDay)}
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
