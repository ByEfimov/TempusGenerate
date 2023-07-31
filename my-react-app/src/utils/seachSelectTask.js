export function searchSelect(task, date) {
  if (task.TaskSatus == "Plan") {
    if (task.selectOn.includes(date)) {
      return false;
    } else {
      return true;
    }
  }
}
