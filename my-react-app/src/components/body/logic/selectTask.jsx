import LocalSave from "../../../storage/LocalStorageConfigurate";
import usersData from "../../../storage/storage";

export function selectTask(e) {
  if (e.target.classList.contains("Task")) {
    if (e.target.childNodes[0].checked === true) {
      e.target.childNodes[0].checked = false;
      usersData[0].userTasks.map((task) => {
        if (task.id == e.target.id) {
          task.TaskSatus = "Make";
          LocalSave("storage", usersData[0].userTasks);
        }
        e.target.style.opacity = "1";
      });
    } else {
      e.target.childNodes[0].checked = true;
      usersData[0].userTasks.map((task) => {
        if (task.id == e.target.id) {
          task.TaskSatus = "Done";
          LocalSave("storage", usersData[0].userTasks);
        }
        e.target.style.opacity = "0.7";
      });
    }
  }
}
