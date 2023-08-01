import { useState } from "react";
import NoHaveTasks from "../../../components/buttons/nohavetasks";
import AddButton from "../../../components/buttons/AddButton";
import AddTaskPlace from "../../modal-windows/add_modal/AddtaskPlace";
import { nextDate } from "../../../utils/time";
import { useSelector } from "react-redux";
import { sortedTasksNextDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import BusinessMode from "../../busines-mode.jsx";
import AddPlanButton from "../../../components/buttons/addPlanButton";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";
import { searchSelect } from "../../../utils/seachSelectTask";
import GroupPlan from "../../../components/render/groups/planGroup";
import GroupMake from "../../../components/render/groups/makeGroup";
import DoneGroup from "../../../components/render/groups/doneGroup";
import ModalRename from "../../modal-windows/rename_modal/ModalRename";
import ModalDell from "../../modal-windows/dellate_modal/ModalDell";

function TommorowPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const [openPlan, setOpenPlan] = useState(false);
  const [modalRenameOpen, setModalRenameOpen] = useState(false);
  const [modalDellateOpen, setModalDellateOpen] = useState(false);

  const ArrayPlans = [];
  UserTasks.map((task) =>
    searchSelect(task, nextDate()) ? ArrayPlans.push(task) : ""
  );

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasksNextDay(UserTasks, nextDate).length > 0 ||
        UserTasks.some((task) => task.TaskSatus === "Plan") ? (
          <div className="groups">
            <GroupPlan date={nextDate}></GroupPlan>
            <GroupMake
              setModalRenameOpen={setModalRenameOpen}
              sorting={sortedTasksNextDay(UserTasks, nextDate)}
              setBusinesModeOpen={setBusinesModeOpen}
            ></GroupMake>
            <DoneGroup
              setModalRenameOpen={setModalRenameOpen}
              sorting={sortedTasksNextDay(UserTasks, nextDate)}
            ></DoneGroup>
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
        <AddTaskPlace
          openPlan={openPlan}
          dayOpen={nextDate()}
          setOpenAdd={setOpenAdd}
        ></AddTaskPlace>
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
          setModalRenameOpen={setModalRenameOpen}
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
      {modalDellateOpen ? <ModalDell></ModalDell> : ""}
    </section>
  );
}
export default TommorowPlace;
