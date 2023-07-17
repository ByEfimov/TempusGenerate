import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { nextDate } from "../logic/time";
import { deleteTask } from "../logic/deleteTask";
import { selectTask } from "../logic/selectTask";

function TommorowPlace(props) {
  const key = "TaskPriority";
  const { UserData, setOpenAdd, OpenAdd } = props;
  const sortedTasks = UserData[0].userTasks
    .sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
    .filter((user) => user.date === nextDate());

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasks[0] ? (
          sortedTasks.map((task) => {
            return (
              <div
                className="Task"
                id={task.id}
                onClick={selectTask}
                key={task.id}
              >
                <input
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Завтра</div>
                <div className="dellButton" onClick={deleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks
            setOpenAdd={setOpenAdd}
            page="TommorowPlace"
          ></NoHaveTasks>
        )}
      </div>
      {sortedTasks[0] ? <AddButton setOpenAdd={setOpenAdd}></AddButton> : ""}
      {OpenAdd ? (
        <AddTask
          UserData={UserData}
          dayOpen={nextDate()}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
    </section>
  );
}
export default TommorowPlace;
