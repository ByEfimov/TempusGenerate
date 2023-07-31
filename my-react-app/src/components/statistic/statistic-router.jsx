import { useState } from "react";
import All from "./modsStatistic/all";
import Done from "./modsStatistic/done";
import { useSelector } from "react-redux";

function Statistic(props) {
  const { showDaysOnMounth } = props;
  const [mode, setMode] = useState("all");
  const UserTasks = useSelector((state) => state.user.userTasks);
  function swapMode(e) {
    if (e.target.parentNode.childNodes[0].textContent == "Все задачи") {
      e.target.parentNode.childNodes[0].textContent = "Выполненые задачи";
      setMode("done");
    } else {
      e.target.parentNode.childNodes[0].textContent = "Все задачи";
      setMode("all");
    }
  }
  function DoneTasks() {
    let result = 0;
    UserTasks.map((task) => {
      if (task.TaskSatus == "Done") {
        result++;
      }
    });
    return result;
  }

  return (
    <div className="statist">
      <div className="title">
        <span>Все задачи</span>
        <div className="button" onClick={swapMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
          >
            <path
              d="M7.33494 14.75C8.29719 16.4167 10.7028 16.4167 11.6651 14.75L17.2942 5C18.2565 3.33333 17.0537 1.25 15.1292 1.25L3.87083 1.25C1.94633 1.25 0.743522 3.33334 1.70577 5L7.33494 14.75Z"
              stroke="var(--textColor)"
            />
          </svg>
        </div>
      </div>
      <div className="distogram">
        {mode == "all" ? (
          <All showDaysOnMounth={showDaysOnMounth}></All>
        ) : (
          <Done showDaysOnMounth={showDaysOnMounth}></Done>
        )}
      </div>
      <div className="text-stat">
        Выполненно {DoneTasks() + " "}
        из {UserTasks.length} задач
      </div>
    </div>
  );
}
export default Statistic;
