import NoHaveTasks from "../components/nohavetasks";

function SelectDay(props) {
  const { setOpenSelect, selectTaks } = props;

  return (
    <div className="place">
      {selectTaks[0] ? (
        selectTaks.map((task) => {
          return (
            <div className="Task" id={task.id} key={task.id}>
              <input
                id="CheckBox"
                defaultChecked={task.TaskSatus === "Done" ? true : false}
                className="CheckBox"
                type="checkbox"
              />
              <label className="Label">{task.TaskName}</label>
              <div className="date">
                {task.date[5] +
                  task.date[6] +
                  task.date[7] +
                  task.date[8] +
                  task.date[9]}
              </div>
            </div>
          );
        })
      ) : (
        <NoHaveTasks page="MainPlace"></NoHaveTasks>
      )}
    </div>
  );
}
export default SelectDay;
