export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEW_TASK":
      return { tasks: [...state.tasks, payload.newTask] };
    case "EDIT_TASK":
      return {
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === payload.id) {
              task.task = payload.newTask;
              return task;
            } else {
              return task;
            }
          })
        ]
      };

    case "DELETE_TASK":
      return { tasks: state.tasks.filter(task => task.id !== payload.id) };
    default:
      return state;
  }
};
