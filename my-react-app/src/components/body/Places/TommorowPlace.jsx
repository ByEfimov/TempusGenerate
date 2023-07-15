import NoHaveTasks from "../components/nohavetasks";

function TommorowPlace(props) {
  let count = 0;
  const key = "TaskPriority";
  const { UserData } = props;
  const sortedTasks = UserData[0].userTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  );

  function nextDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 3).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <section className="Tomorrow-place place" id="modetomorrow">
      {UserData[0].userTasks[0] ? (
        sortedTasks.map((task) => {
          if (task.date === nextDate()) {
            count += 1;
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
          } else if (count === 0) {
            return <NoHaveTasks page="TommorowPlace"></NoHaveTasks>;
          }
        })
      ) : (
        <NoHaveTasks page="TommorowPlace"></NoHaveTasks>
      )}
    </section>
  );
}
export default TommorowPlace;
