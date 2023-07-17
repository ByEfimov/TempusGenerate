import NoHaveTasks from "../components/nohavetasks";
import LocalSave from "../../../storage/LocalStorageConfigurate";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { thisDate } from "../../time";

function MainPlace(props) {
  const { UserData, setOpenAdd, OpenAdd } = props;
  const key = "TaskPriority";

  const sortedTasks = UserData[0].userTasks
    .sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
    .filter((user) => user.date === thisDate());

  function selectTask(e) {
    if (e.target.childNodes[0].checked === true) {
      e.target.childNodes[0].checked = false;
      UserData[0].userTasks.map((task) => {
        if (task.id == e.target.id) {
          task.TaskSatus = "Make";
          LocalSave("storage", UserData[0].userTasks);
        }
      });
    } else {
      e.target.childNodes[0].checked = true;
      UserData[0].userTasks.map((task) => {
        if (task.id == e.target.id) {
          task.TaskSatus = "Done";
          LocalSave("storage", UserData[0].userTasks);
        }
      });
    }
  }

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
