import NoHaveTasks from "../components/nohavetasks";
import AddButton from "../components/AddButton";
import AddTask from "./AddtaskPlace";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { sortedTasksSelectDay } from "../logic/sorting";
import { useCustomHook } from "../../../App";
import TaskRender from "../components/TaskRender";
import GoBackComp from "../components/GoBack";

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
            return TaskRender(
              task,
              `${
                task.date[5] +
                task.date[6] +
                task.date[7] +
                task.date[8] +
                task.date[9]
              }`
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
        <GoBackComp isS={false} GoBack={GoBack}></GoBackComp>
      ) : (
        <GoBackComp isS={true} GoBack={GoBack}></GoBackComp>
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
