function MainPlace(props) {
  const { UserData } = props;
  const key = "TaskPriority";
  const sortedTasks = UserData[0].userTasksToDay.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  );

  function selectTask(e) {
    if (e.target.childNodes[0].checked === true) {
      e.target.childNodes[0].checked = false;
    } else {
      e.target.childNodes[0].checked = true;
    }
  }

  return (
    <section className="Main-place place" id="modetoday">
      {UserData[0].userTasksToDay[0] ? (
        sortedTasks.map(function (task) {
          return (
            <div className="Task" onClick={selectTask} key={task.id}>
              <input id="CheckBox" className="CheckBox" type="checkbox" />
              <label className="Label">{task.TaskName}</label>
              <div className="date">Сегодня</div>
            </div>
          );
        })
      ) : (
        <div className="noHaveTasks">
          <div className="noHaveTasks-body">
            <div className="title">Здесь еще нет задачь</div>
            <button className="addtask">Создать задачу</button>
          </div>
        </div>
      )}
    </section>
  );
}
export default MainPlace;
