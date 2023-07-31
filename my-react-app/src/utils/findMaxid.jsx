export function findMaxid(UserTasks) {
  let result = 0;
  UserTasks.map((item) => {
    if (item.id > result) {
      result = item.id;
    }
  });
  result++;
  return result;
}
