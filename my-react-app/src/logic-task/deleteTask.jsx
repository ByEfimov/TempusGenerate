import { DellDispatch } from "../pages/body/index";
import { Animate } from "../assets/animations";

function DeleteTask(e) {
  Animate(e.target.parentNode, "TaskDell", "300");
  setTimeout(() => {
    DellDispatch({ type: "REMOVE_TASK", payload: e.target.parentNode.id - 1 });
  }, 300);
  return {};
}
export default DeleteTask;
