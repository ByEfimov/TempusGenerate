import { findMaxid } from "../utils/findMaxid";

export function generateTask(inputName, inputDate, UserTasks) {
  function GenerateFinal() {
    if (inputName != "") {
      let Value = 1000;
      if (document.querySelector(".Priority")) {
        if (document.querySelector(".Priority").value == "up") {
          UserTasks.map((task) => {
            if (task.FirstPrior <= Value) {
              Value = task.FirstPrior - 1;
            }
          });
        } else if (document.querySelector(".Priority").value == "down") {
          UserTasks.map((task) => {
            if (task.FirstPrior >= Value) {
              Value = task.FirstPrior + 1;
            }
          });
        }
      }

      const NewTask = {
        id: findMaxid(UserTasks),
        TaskName: inputName,
        TaskSatus: "Make",
        TaskPriority: Value,
        date: inputDate,
        FirstPrior: Value,
      };
      return NewTask;
    }
  }
  return GenerateFinal();
}

export function generateTaskPlan(inputName, UserTasks) {
  function GenerateFinal() {
    if (inputName != "") {
      let Value = 1000;
      if (document.querySelector(".Priority").value == "up") {
        UserTasks.map((task) => {
          if (task.FirstPrior <= Value) {
            Value = task.FirstPrior - 1;
          }
        });
      } else if (document.querySelector(".Priority").value == "down") {
        UserTasks.map((task) => {
          if (task.FirstPrior >= Value) {
            Value = task.FirstPrior + 1;
          }
        });
      }

      const NewTask = {
        id: findMaxid(UserTasks),
        planId: findMaxid(UserTasks),
        TaskName: inputName,
        TaskSatus: "Plan",
        TaskPriority: Value,
        date: "Plan",
        selectOn: [],
        FirstPrior: Value,
      };
      return NewTask;
    }
  }
  return GenerateFinal();
}
