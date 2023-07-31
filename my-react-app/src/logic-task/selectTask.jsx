import { UsersData } from "../pages/body/index";

export function SelectTask(e) {
  return new Promise((resolve) => {
    if (e.target.classList.contains("Task")) {
      if (e.target.childNodes[0].checked === true) {
        e.target.childNodes[0].checked = false;
        UsersData.map((task) => {
          if (task.id == e.target.id) {
            resolve([task, "Make"]);
          }
          e.target.style.opacity = "1";
        });
      } else {
        e.target.childNodes[0].checked = true;
        UsersData.map((task) => {
          if (task.id == e.target.id) {
            resolve([task, "Done"]);
          }
          e.target.style.opacity = "0.7";
        });
      }
    }
  });
}
