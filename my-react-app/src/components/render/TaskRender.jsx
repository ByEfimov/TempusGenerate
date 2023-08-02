import { SelectTask } from "../../logic-task/selectTask";
import { useSelector } from "react-redux";
import { Animate } from "../../assets/animations";
import { findMaxid } from "../../utils/findMaxid";
import { useDispatch } from "react-redux";

export default function TaskRender(props) {
  const dispatch = useDispatch();
  const { task, Day, setModalRenameOpen, itsPlan, date, setModalDellateOpen } =
    props;
  const UserTasks = useSelector((state) => state.user.userTasks);

  function selectTaskPlan(e) {
    UserTasks.map((task) => {
      if (task.planId == e.target.id) {
        const NewTask = {
          id: findMaxid(UserTasks),
          TaskName: task.TaskName,
          TaskSatus: "Done",
          TaskPriority: task.TaskPriority,
          date: date,
        };
        dispatch({ type: "ADD_TASK", payload: NewTask });
        Animate(e.target, "TaskDell", "300");
        setTimeout(() => {
          dispatch({
            type: "ADD_TO_SELECTON",
            taskId: task.id,
            newValue: date,
          });
        }, 300);
      }
    });
  }

  async function selectTask(e) {
    const NewStatus = await SelectTask(e);
    Animate(e.target, "TaskDell", "300");
    setTimeout(() => {
      task.TaskSatus = NewStatus[1];
      dispatch({
        type: "CHANGE_TASK",
        taskId: e.target.id,
        newStatus: NewStatus[1],
      });
      dispatch({
        type: "CHANGE_PRIOR",
        taskId: e.target.id,
        newPriority: NewStatus[0].TaskPriority,
      });
    }, 300);
  }

  return (
    <div
      id={task.id}
      className={task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"}
      onClick={itsPlan ? selectTaskPlan : selectTask}
    >
      <input
        defaultChecked={task.TaskSatus === "Done" ? true : false}
        className="CheckBox"
        type="checkbox"
      />
      <label className="Label">{task.TaskName}</label>
      {Day ? <div className="date">{Day}</div> : ""}
      {itsPlan ? (
        ""
      ) : (
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
      )}
      {itsPlan ? (
        ""
      ) : (
        <div
          className="dellButton"
          onClick={(e) => {
            setModalDellateOpen(e.target);
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
      )}
    </div>
  );
}
