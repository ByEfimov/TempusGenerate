import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";

function TommorowPlace(props) {
  const key = "TaskPriority";
  const { UserData, setOpenAdd, OpenAdd, setSelectTilte } = props;
  const sortedTasks = UserData[0].userTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  );

  const sortedTasks2 = sortedTasks.filter((user) => user.date === nextDate());

  function nextDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      <div className="scroll">
        {sortedTasks2[0] ? (
          sortedTasks2.map((task) => {
            return (
              <div className="Task" key={task.id}>
                <input
                  id="CheckBox"
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Завтра</div>
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
      {sortedTasks2[0] ? <AddButton setOpenAdd={setOpenAdd}></AddButton> : ""}
      {OpenAdd ? (
        <AddTask
          setOpenAdd={setOpenAdd}
          setSelectTilte={setSelectTilte}
        ></AddTask>
      ) : (
        ""
      )}
    </section>
  );
}
export default TommorowPlace;
