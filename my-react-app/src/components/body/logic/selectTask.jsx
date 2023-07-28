import { UsersData } from "../Body";
import { DellDispatch } from "../Body";

export function SelectTask(e) {
  if (e.target.classList.contains("Task")) {
    if (e.target.childNodes[0].checked === true) {
      e.target.childNodes[0].checked = false;
      UsersData.map((task) => {
        if (task.id == e.target.id) {
          e.target.style.cssText = `animation: TaskDell 300ms forwards;`;
          setTimeout(() => {
            task.TaskSatus = "Make";
            DellDispatch({
              type: "CHANGE_TASK",
              taskId: e.target.id,
              newStatus: "Make",
            });
            DellDispatch({
              type: "CHANGE_PRIOR",
              taskId: e.target.id,
              newPriority: task.FirstPrior,
            });
          }, 300);
        }
        e.target.style.opacity = "1";
      });
    } else {
      e.target.childNodes[0].checked = true;
      UsersData.map((task) => {
        if (task.id == e.target.id) {
          e.target.style.cssText = `animation: TaskDell 300ms forwards;`;
          setTimeout(() => {
            task.TaskSatus = "Done";
            DellDispatch({
              type: "CHANGE_TASK",
              taskId: e.target.id,
              newStatus: "Done",
            });
            DellDispatch({
              type: "CHANGE_PRIOR",
              taskId: e.target.id,
              newPriority: task.FirstPrior + 1000,
            });
          }, 300);
        }
        e.target.style.opacity = "0.7";
      });
    }
  }
}
