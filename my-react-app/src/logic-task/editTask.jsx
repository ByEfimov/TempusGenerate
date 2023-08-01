import { DellDispatch } from "../pages/body/index";

export function EditTask(e) {
  const NewTaskName = prompt("Новое название");
  if (NewTaskName != "" && NewTaskName) {
    DellDispatch({
      type: "CHANGE_TASK_NAME",
      taskId: e.target.parentNode.id,
      newTaskName: NewTaskName,
    });
  }
}
