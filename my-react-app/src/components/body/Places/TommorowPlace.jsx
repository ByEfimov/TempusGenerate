import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { nextDate } from "../logic/time";
import { deleteTask } from "../logic/deleteTask";
import { selectTask } from "../logic/selectTask";
import { sortedTasksNextDay } from "../logic/sorted";

function TommorowPlace(props) {
  const { UserData, setOpenAdd, OpenAdd } = props;

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasksNextDay(UserData)[0] ? (
          sortedTasksNextDay(UserData).map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
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
      {sortedTasksNextDay(UserData)[0] ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
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
