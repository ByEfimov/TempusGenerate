import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "../../../components/buttons/AddButton";
import AddTask from "../../modal-windows/add_modal/AddtaskPlace";
import { thisDate } from "../../../utils/time";
import { sortedTasksToDay } from "../../../utils/sorting";
import { useCustomHook } from "../../../App";
import NoHaveTasks from "../../../components/buttons/nohavetasks";
import BusinessMode from "../../busines-mode.jsx";
import PlanPlace from "../../modal-windows/plan_modal/PlanPlace";
import AddPlanButton from "../../../components/buttons/addPlanButton";
import GroupPlan from "../../../components/render/groups/planGroup";
import GroupMake from "../../../components/render/groups/makeGroup";
import DoneGroup from "../../../components/render/groups/doneGroup";
import ModalRename from "../../modal-windows/rename_modal/ModalRename";
import ModalDell from "../../modal-windows/dellate_modal/ModalDell";

function MainPlace() {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { OpenAdd, setOpenAdd } = useCustomHook();
  const [BusinesModeOpen, setBusinesModeOpen] = useState(false);
  const [openPlan, setOpenPlan] = useState(false);
  const [modalRenameOpen, setModalRenameOpen] = useState(false);
  const [modalDellateOpen, setModalDellateOpen] = useState(false);

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserTasks, thisDate).length > 0 ||
        UserTasks.some((task) => task.TaskSatus === "Plan") ? (
          <div className="groups">
            <GroupPlan date={thisDate}></GroupPlan>
            <GroupMake
              setModalDellateOpen={setModalDellateOpen}
              setModalRenameOpen={setModalRenameOpen}
              sorting={sortedTasksToDay(UserTasks, thisDate)}
              setBusinesModeOpen={setBusinesModeOpen}
            ></GroupMake>
            <DoneGroup
              setModalDellateOpen={setModalDellateOpen}
              setModalRenameOpen={setModalRenameOpen}
              sorting={sortedTasksToDay(UserTasks, thisDate)}
            ></DoneGroup>
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
          setModalDellateOpen={setModalDellateOpen}
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
      {modalDellateOpen ? (
        <ModalDell
          modalDellateOpen={modalDellateOpen}
          setModalDellateOpen={setModalDellateOpen}
        ></ModalDell>
      ) : (
        ""
      )}
    </section>
  );
}
export default MainPlace;
