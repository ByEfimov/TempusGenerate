import { DellDispatch } from "../pages/body/index";
import { inputValueExport } from "../pages/modal-windows/rename_modal/ModalRename";

export function EditTask(e) {
  const NewTaskName = inputValueExport;
  if (NewTaskName != "" && NewTaskName) {
    DellDispatch({
      type: "CHANGE_TASK_NAME",
      taskId: e.target.parentNode.id,
      newTaskName: NewTaskName,
    });
  }
}
