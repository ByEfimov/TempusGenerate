import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";

function SelectDay(props) {
  const { setOpenSelect, OpenAdd, selectTaks, setOpenAdd, setSelectTilte } =
    props;

  function GoBack() {
    setOpenSelect(false);
    setSelectTilte("Все дни");
  }

  return (
    <div className="place">
      <div className="scroll">
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
          <NoHaveTasks setOpenAdd={setOpenAdd} page="MainPlace"></NoHaveTasks>
        )}
      </div>
      {selectTaks[0] ? <AddButton setOpenAdd={setOpenAdd}></AddButton> : ""}
      {selectTaks[0] ? (
        <div className="GoBack" onClick={GoBack}>
          s
        </div>
      ) : (
        <div className="GoBack s" onClick={GoBack}>
          s
        </div>
      )}
      {OpenAdd ? (
        <AddTask
          setOpenAdd={setOpenAdd}
          setSelectTilte={setSelectTilte}
        ></AddTask>
      ) : (
        ""
      )}
    </div>
  );
}
export default SelectDay;
