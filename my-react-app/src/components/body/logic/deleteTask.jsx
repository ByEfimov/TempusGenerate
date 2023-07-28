import { DellDispatch } from "../Body";

function DeleteTask(e) {
  e.target.parentNode.style.cssText = `animation: TaskDell 300ms forwards;`;
  setTimeout(() => {
    DellDispatch({ type: "REMOVE_TASK", payload: e.target.parentNode.id - 1 });
  }, 300);

  return {};
}
export default DeleteTask;
