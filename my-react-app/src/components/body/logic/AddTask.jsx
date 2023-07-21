function AddTask(inputName, inputDate, GoBack, UserTasks, dispatch) {
  console.log(UserTasks ? console.log(UserTasks) : "");
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

  function Addtasks() {
    if (inputName != "") {
      let Value = 1000;
      if (document.querySelector(".Priority").value == "С верху") {
        UserTasks.map((task) => {
          if (task.FirstPrior <= Value) {
            Value = Value - 1;
          }
        });
      } else if (document.querySelector(".Priority").value == "С низу") {
        UserTasks.map((task) => {
          if (task.FirstPrior >= Value) {
            Value = Value + 1;
          }
        });
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
  Addtasks();
}

export default AddTask;
