const key = "TaskPriority";
export function sortedTasksToDay(UserTasks, thisDate) {
  return UserTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  ).filter((user) => user.date === thisDate());
}
export function sortedTasksNextDay(UserTasks, nextDate) {
  return UserTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  ).filter((user) => user.date === nextDate());
}

export function sortedTasksSelectDay(UserTasks, selectDate, clickDay) {
  return UserTasks.sort((user1, user2) =>
    user1[key] > user2[key] ? 1 : -1
  ).filter((user) => user.date === selectDate(clickDay));
}
