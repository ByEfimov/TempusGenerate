const usersData = [
  {
    id: 0,
    userProperties: {
      login: "Nikita",
      Email: "nikita@mail.com",
      Password: "lol",
      TeamCode: 22,
      Role: "admin",
      InviteCode: "22",
    },
    userTasksToDay: [
      { id: 0, TaskName: "Создать привет", TaskSatus: "Make", TaskPriority: 1 },
      {
        id: 1,
        TaskName: "Приготовить тортик",
        TaskSatus: "Make",
        TaskPriority: 2,
      },
      {
        id: 2,
        TaskName: "ГотовоГотовоГотовоГотово",
        TaskSatus: "Done",
        TaskPriority: 3,
      },
    ],
    userTasksTommorow: {},
  },
];

export default usersData;
