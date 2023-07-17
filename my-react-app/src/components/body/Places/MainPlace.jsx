import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { thisDate } from "../logic/time";
import { selectTask } from "../logic/selectTask";
import { deleteTask } from "../logic/deleteTask";
import { sortedTasksToDay } from "../logic/sorted";

function MainPlace(props) {
  const { UserData, setOpenAdd, OpenAdd } = props;

  return (
    <section className="Main-place place" id="modetoday">
      <div className="scroll">
        {sortedTasksToDay(UserData)[0] ? (
          sortedTasksToDay(UserData).map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
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
      {sortedTasksToDay(UserData)[0] ? (
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
