import { useState } from "react";
import userData from "../../../storage/storage";

function MainPlace() {
  const [UserData, setUserdata] = useState(userData);

  return (
    <section className="Main-place place" id="modetoday">
      {UserData[0].userTasksToDay.map(function (task) {
        return (
          <div className="Task" key={task.id}>
            <input id="CheckBox" className="CheckBox" type="checkbox" />
            <label className="Label">{task.TaskName}</label>
            <div className="date">Сегодня</div>
          </div>
        );
      })}
    </section>
  );
}
export default MainPlace;
