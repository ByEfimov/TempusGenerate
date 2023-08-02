import TaskRender from "../TaskRender";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function GroupMake(props) {
  const UserTasks = useSelector((state) => state.user.userTasks);
  const {
    setBusinesModeOpen,
    sorting,
    setModalRenameOpen,
    setModalDellateOpen,
  } = props;
  const [currentTask, setCurrentTask] = useState({});
  const dispatch = useDispatch();

  function OpenBussinesMode() {
    setBusinesModeOpen(true);
  }

  function dragStartHandler(e, task) {
    setCurrentTask(task);
  }

  function dragEndHandler(e) {
    e.target.style.backgroundColor = "var(--secondColor)";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "var(--thirdColo)";
  }

  function dropHandler(e, taskD) {
    UserTasks.map((t) => {
      if (t.id == taskD.id) {
        dispatch({
          type: "CHANGE_PRIOR",
          taskId: t.id,
          newPriority: currentTask.TaskPriority,
        });
      }
      if (t.id == currentTask.id) {
        dispatch({
          type: "CHANGE_PRIOR",
          taskId: t.id,
          newPriority: taskD.TaskPriority,
        });
      }
    });
    e.target.style.backgroundColor = "var(--secondColor)";
  }

  return (
    <>
      {sorting.some((task) => task.TaskSatus === "Make") ? (
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
            {sorting.map((task) => {
              if (task.TaskSatus == "Make") {
                return (
                  <div
                    className="MakeTask"
                    key={task.id}
                    draggable={true}
                    onDragStart={(e) => dragStartHandler(e, task)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, task)}
                  >
                    <TaskRender
                      setModalDellateOpen={setModalDellateOpen}
                      setModalRenameOpen={setModalRenameOpen}
                      task={task}
                      itsPlan={false}
                    ></TaskRender>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
