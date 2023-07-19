import { DellDispatch } from "../Body";

function DeleteTask(e) {
  DellDispatch({ type: "REMOVE_TASK", payload: e.target.parentNode.id - 1 });
  return {};
}
export default DeleteTask;
