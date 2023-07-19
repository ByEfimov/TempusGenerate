import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { thisDate } from "../logic/time";
import { SelectTask } from "../logic/selectTask";
import DeleteTask from "../logic/deleteTask";
import { useSelector } from "react-redux";

function MainPlace(props) {
  const { UserData, setOpenAdd, OpenAdd } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);

  console.log(UserTasks);
  const key = "TaskPriority";

  function sortedTasksToDay() {
    return UserTasks.sort((user1, user2) =>
      user1[key] > user2[key] ? 1 : -1
    ).filter((user) => user.date === thisDate());
  }

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay().length > 0 ? (
          sortedTasksToDay().map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
                onClick={SelectTask}
                id={task.id}
                key={task.id}
              >
                <input
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Сегодня</div>
                <div className="dellButton" onClick={DeleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks page="MainPlace" setOpenAdd={setOpenAdd}></NoHaveTasks>
        )}
      </div>
      {sortedTasksToDay().length > 0 ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {OpenAdd ? (
        <AddTask
          UserData={UserData}
          dayOpen={thisDate()}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
    </section>
  );
}
export default MainPlace;
