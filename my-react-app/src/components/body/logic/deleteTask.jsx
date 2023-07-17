import usersData from "../../../storage/storage";
import LocalSave from "../../../storage/LocalStorageConfigurate";

export function deleteTask(e) {
  let dellID = 0;
  for (let i = 0; i < usersData[0].userTasks.length; i++) {
    if (usersData[0].userTasks[i].id == e.target.parentNode.id) {
      dellID = i;
    }
  }
  usersData[0].userTasks.splice(dellID, 1);
  LocalSave("storage", usersData[0].userTasks);
  window.location.reload();
}
