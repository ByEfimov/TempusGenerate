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
import GroupMake from "../../../components/render/groups/makeGroup";
import DoneGroup from "../../../components/render/groups/doneGroup";
import ModalRename from "../../modal-windows/rename_modal/ModalRename";
import ModalDell from "../../modal-windows/dellate_modal/ModalDell";

function SelectDay(props) {
  const { setOpenSelect, allBody, setSelectTilte, clickDay } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const RefSelectDay = React.createRef();
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [openPlan, setOpenPlan] = useState(false);
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const [modalRenameOpen, setModalRenameOpen] = useState(false);
  const [modalDellateOpen, setModalDellateOpen] = useState(false);

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

            <GroupMake
              sorting={sortedTasksSelectDay(
                UserTasks,
                FormatDayToDate,
                clickDay
              )}
              setModalDellateOpen={setModalDellateOpen}
              setModalRenameOpen={setModalRenameOpen}
              setBusinesModeOpen={setBusinesModeOpen}
            ></GroupMake>

            <DoneGroup
              setModalDellateOpen={setModalDellateOpen}
              sorting={sortedTasksSelectDay(
                UserTasks,
                FormatDayToDate,
                clickDay
              )}
              setModalRenameOpen={setModalRenameOpen}
            ></DoneGroup>
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
          setModalRenameOpen={setModalRenameOpen}
          setModalDellateOpen={setModalDellateOpen}
        ></PlanPlace>
      ) : (
        ""
      )}
      {modalRenameOpen ? (
        <ModalRename
          modalRenameOpen={modalRenameOpen}
          setModalRenameOpen={setModalRenameOpen}
        ></ModalRename>
      ) : (
        ""
      )}
      {modalDellateOpen ? (
        <ModalDell
          setModalDellateOpen={setModalDellateOpen}
          modalDellateOpen={modalDellateOpen}
        ></ModalDell>
      ) : (
        ""
      )}
    </div>
  );
}
export default SelectDay;
