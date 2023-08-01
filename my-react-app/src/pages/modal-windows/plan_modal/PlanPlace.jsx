import { createRef } from "react";
import { useSelector } from "react-redux";
import GoBackComp from "../../../components/buttons/GoBack";
import AddButton from "../../../components/buttons/AddButton";
import DeleteTask from "../../../logic-task/deleteTask";
import { Animate } from "../../../assets/animations";

function PlanPlace(props) {
  const { setOpenPlan, setOpenAdd, setModalRenameOpen } = props;
  const BusinesMode = createRef();
  const UserTasks = useSelector((state) => state.user.userTasks);

  function GoBack() {
    Animate(BusinesMode.current, "PlanDell", "500");
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

                        <div
                          className="editButton"
                          onClick={(e) => {
                            setModalRenameOpen(e.target);
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.2599 3.60022L5.04985 12.2902C4.73985 12.6202 4.43985 13.2702 4.37985 13.7202L4.00985 16.9602C3.87985 18.1302 4.71985 18.9302 5.87985 18.7302L9.09985 18.1802C9.54985 18.1002 10.1799 17.7702 10.4899 17.4302L18.6999 8.74022C20.1199 7.24022 20.7599 5.53022 18.5499 3.44022C16.3499 1.37022 14.6799 2.10022 13.2599 3.60022Z"
                              stroke="var(--textColor)"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.8901 5.0498C12.3201 7.8098 14.5601 9.9198 17.3401 10.1998"
                              stroke="var(--textColor)"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 22H21"
                              stroke="var(--textColor)"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="dellButton" onClick={DeleteTask}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                              stroke="var(--red)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                              stroke="var(--red)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014"
                              stroke="var(--red)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.3301 16.5H13.6601"
                              stroke="var(--red)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.5 12.5H14.5"
                              stroke="var(--red)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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
