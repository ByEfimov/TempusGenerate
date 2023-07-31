function AddTaskPlan(inputName, inputDate, GoBack, UserTasks, dispatch) {
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
        id: findMaxid(),
        planId: findMaxid(),
        TaskName: inputName,
        TaskSatus: "Plan",
        TaskPriority: Value,
        date: "Plan",
        selectOn: [],
        FirstPrior: Value,
      };
      dispatch({ type: "ADD_TASK", payload: NewTask });

      GoBack();
    }
  }
  Addtasks();
}

export default AddTaskPlan;
