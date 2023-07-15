import NoHaveTasks from "../components/nohavetasks";

function MainPlace(props) {
  const { UserData } = props;
  const key = "TaskPriority";
  const sortedTasks = UserData[0].userTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  );

  let count = 0;

  function selectTask(e) {
    if (e.target.childNodes[0].checked === true) {
      e.target.childNodes[0].checked = false;
    } else {
      e.target.childNodes[0].checked = true;
    }
  }

  function thisDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 2).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (
    <section className="Main-place place" id="modetoday">
      {UserData[0].userTasks[0] ? (
        sortedTasks.map((task) => {
          if (task.date === thisDate()) {
            count += 1;
            return (
              <div className="Task" onClick={selectTask} key={task.id}>
                <input
                  id="CheckBox"
                  defaultChecked={task.TaskSatus === "Done" ? true : false}
                  className="CheckBox"
                  type="checkbox"
                />
                <label className="Label">{task.TaskName}</label>
                <div className="date">Сегодня</div>
              </div>
            );
          } else if (count === 0) {
            return <NoHaveTasks page="MainPlace"></NoHaveTasks>;
          }
        })
      ) : (
        <NoHaveTasks page="MainPlace"></NoHaveTasks>
      )}
    </section>
  );
}
export default MainPlace;
