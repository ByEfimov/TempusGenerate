function addTask(inputName, inputDate, GoBack, UserTasks, dispatch) {
  function findMaxid() {
    let result = 0;
    UserTasks.map((item) => {
      if (item.id > result) {
        result = item.id;
      }
    });
    result++;
    return result;
  }

  function AddtasksFinal() {
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
        id: findMaxid(),
        TaskName: inputName,
        TaskSatus: "Make",
        TaskPriority: Value,
        date: inputDate,
        FirstPrior: Value,
      };
      dispatch({ type: "ADD_TASK", payload: NewTask });

      GoBack();
    }
  }
  AddtasksFinal();
}

export default addTask;
