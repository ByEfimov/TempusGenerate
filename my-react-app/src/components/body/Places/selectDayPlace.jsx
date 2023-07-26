import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { SelectTask } from "../logic/selectTask";
import DeleteTask from "../logic/deleteTask";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { sortedTasksSelectDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";

function SelectDay(props) {
  const { setOpenSelect, setSelectTilte, clickDay } = props;
  const UserTasks = useSelector((state) => state.user.userTasks);
  const RefSelectDay = React.createRef();
  const { OpenAdd, setOpenAdd } = useCustomHook();

  function selectDate(day) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function GoBack() {
    RefSelectDay.current.style.cssText =
      "animation: 0.3s closeSelect forwards;";
    setTimeout(() => {
      setOpenSelect(false);
      setSelectTilte("Все дни");
    }, 250);
  }

  useEffect(() => {
    props.setSelectTilte(selectDate(clickDay));
  }, []);

  return (
    <div className="place selectDay" ref={RefSelectDay}>
      <div className="scroll">
        {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length > 0 ? (
          sortedTasksSelectDay(UserTasks, selectDate, clickDay).map((task) => {
            return (
              <div
                className={
                  task.TaskSatus === "Done" ? "opacity07 Task" : "opacity1 Task"
                }
                onClick={SelectTask}
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
                <div className="dellButton" onClick={DeleteTask}></div>
              </div>
            );
          })
        ) : (
          <NoHaveTasks setOpenAdd={setOpenAdd} page="MainPlace"></NoHaveTasks>
        )}
      </div>
      {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length > 0 ? (
        <AddButton setOpenAdd={setOpenAdd}></AddButton>
      ) : (
        ""
      )}
      {sortedTasksSelectDay(UserTasks, selectDate, clickDay).length > 0 ? (
        <div className="GoBack" onClick={GoBack}></div>
      ) : (
        <div className="GoBack s" onClick={GoBack}></div>
      )}
      {OpenAdd ? (
        <AddTask
          dayOpen={selectDate(clickDay)}
          setOpenAdd={setOpenAdd}
        ></AddTask>
      ) : (
        ""
      )}
    </div>
  );
}
export default SelectDay;
