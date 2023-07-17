import { thisDate } from "./time";
import { nextDate } from "./time";

const key = "TaskPriority";

export function sortedTasksToDay(usersData) {
  return usersData[0].userTasks
    .sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
    .filter((user) => user.date === thisDate());
}

export function sortedTasksNextDay(usersData) {
  return usersData[0].userTasks
    .sort((user1, user2) => (user1[key] > user2[key] ? 1 : -1))
    .filter((user) => user.date === nextDate());
}
