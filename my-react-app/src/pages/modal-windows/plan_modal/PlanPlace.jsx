import { createRef } from "react";
import { useSelector } from "react-redux";
import GoBackComp from "../../../components/buttons/GoBack";
import { useTheme } from "../../../hooks/UseTheme";
import backL from "../../../assets/light/backet.svg";
import back from "../../../assets/dark/backet.svg";
import edit from "../../../assets/dark/edit.svg";
import editL from "../../../assets/light/edit.svg";
import AddButton from "../../../components/buttons/AddButton";
import DeleteTask from "../../../logic-task/deleteTask";
import { EditTask } from "../../../logic-task/editTask";

function PlanPlace(props) {
  const { setOpenPlan, setOpenAdd } = props;
  const BusinesMode = createRef();
  const UserTasks = useSelector((state) => state.user.userTasks);
  const { theme } = useTheme();

  function GoBack() {
    BusinesMode.current.style.cssText = "animation: PlanDell 500ms forwards;";
    setTimeout(() => {
      setOpenPlan(false);
    }, 500);
  }

  return (
    <div className="planPlace place" ref={BusinesMode}>
      <div className="scroll">
        <div className="groups">
          {UserTasks.some((task) => task.TaskSatus === "Plan") ? (
            <div className="group">
              <div className="title">Планы</div>
              <div className="tasks">
                {UserTasks.map((task) => {
                  if (task.TaskSatus == "Plan") {
                    return (
                      <div
                        key={task.planId}
                        className={
                          task.TaskSatus === "Done"
                            ? "opacity07 Task"
                            : "opacity1 Task"
                        }
                        id={task.planId}
                      >
                        <label className="Label">{task.TaskName}</label>
                        <div className="date">План</div>
                        <div className="dellButton" onClick={DeleteTask}>
                          {theme === "LTempus" ? (
                            <img src={backL} alt="" />
                          ) : (
                            <img src={back} alt="" />
                          )}
                        </div>
                        <div className="editButton" onClick={EditTask}>
                          {theme === "LTempus" ? (
                            <img src={editL} alt="" />
                          ) : (
                            <img src={edit} alt="" />
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <AddButton setOpenAdd={setOpenAdd}></AddButton>
      <GoBackComp isS={false} GoBack={GoBack}></GoBackComp>
    </div>
  );
}
export default PlanPlace;
