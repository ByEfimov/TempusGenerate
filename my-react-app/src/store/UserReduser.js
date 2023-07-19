const UserData = {
  id: 0,
  userProperties: {
    login: "Nikita",
    Email: "nikita@mail.com",
    Password: "lol",
    TeamCode: 22,
    Role: "admin",
    InviteCode: "22",
  },
  userTasks: [
    {
      id: 1,
      TaskName: "ale1",
      TaskSatus: "Make",
      TaskPriority: 1,
      date: "2023-07-19",
    },
    {
      id: 2,
      TaskName: "ale2",
      TaskSatus: "Make",
      TaskPriority: 2,
      date: "2023-07-19",
    },
    {
      id: 3,
      TaskName: "ale3",
      TaskSatus: "Make",
      TaskPriority: 1,
      date: "2023-07-20",
    },
    {
      id: 4,
      TaskName: "ale4",
      TaskSatus: "Make",
      TaskPriority: 1,
      date: "2023-07-25",
    },
  ],
};

export const userReduser = (state = UserData, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, userTasks: [...state.userTasks, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        userTasks: state.userTasks.filter(
          (task) => task.id !== action.payload + 1
        ),
      };
    case "CHANGE_TASK":
      return {
        ...state.userTasks,
        userTasks: state.userTasks.map((task) => {
          if (task.id === action.taskId) {
            return {
              ...task,
              TaskSatus: action.newStatus,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};
