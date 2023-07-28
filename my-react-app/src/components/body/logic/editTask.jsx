import { DellDispatch } from "../Body";

export function EditTask(e) {
  const NewTaskName = prompt("Новое название");

  if (NewTaskName != "" && NewTaskName) {
    DellDispatch({
      type: "CHANGE_TASK_NAME",
      taskId: e.target.parentNode.parentNode.id,
      newTaskName: NewTaskName,
    });
  }
}
