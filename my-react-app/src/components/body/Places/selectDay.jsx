import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "../components/Addtask";
import { selectTask } from "../logic/selectTask";
import { deleteTask } from "../logic/deleteTask";

function SelectDay(props) {
  const {
    UserData,
    setOpenSelect,
    dayOpen,
    OpenAdd,
    selectTaks,
    setOpenAdd,
    setSelectTilte,
  } = props;

  function GoBack() {
    document.querySelector(".selectDay").style.cssText =
      "animation: 0.3s closeSelect forwards;";
    setTimeout(() => {
      setOpenSelect(false);
      setSelectTilte("Все дни");
    }, 250);
  }

  return (
    <div className="place selectDay">
      <div className="scroll">
        {selectTaks[0] ? (
          selectTaks.map((task) => {
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
                <div className="date">
                  {task.date[5] +
                    task.date[6] +
                    task.date[7] +
                    task.date[8] +
                    task.date[9]}
                </div>
                <div className="dellButton" onClick={deleteTask}></div>
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
          GoBackSelect={GoBack}
          UserData={UserData}
          dayOpen={dayOpen}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
    </div>
  );
}
export default SelectDay;
