export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
        isModalOpen: true,
        modalText: "Task is Added!",
      };
    case "DELETE_TASK":
      const filterdTask = [...state.tasks].filter(
        (task) => task.id !== payload
      );

      return {
        ...state,
        tasks: filterdTask,
        isModalOpen: true,
        modalText: "Task was Removed!",
      };

    default:
      return state;
  }
};
