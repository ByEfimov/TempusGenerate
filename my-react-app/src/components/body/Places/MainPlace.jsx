import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { thisDate } from "../logic/time";
import { selectTask } from "../logic/selectTask";
import { deleteTask } from "../logic/deleteTask";

function MainPlace(props) {
  const { UserData, setOpenAdd, OpenAdd } = props;
  const key = "TaskPriority";

  const sortedTasks = UserData[0].userTasks
    .sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
    .filter((user) => user.date === thisDate());

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasks[0] ? (
          sortedTasks.map((task) => {
            return (
              <div
                className="Task"
                onClick={selectTask}
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
                <div className="dellButton" onClick={deleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks page="MainPlace" setOpenAdd={setOpenAdd}></NoHaveTasks>
        )}
      </div>
      {sortedTasks[0] ? <AddButton setOpenAdd={setOpenAdd}></AddButton> : ""}
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
