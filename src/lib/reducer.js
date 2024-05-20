export const tasksReducer = (tasks, action) => {
  if (action.type === 'ADD_TASK') {
    return {
      ...tasks,
      [action.status]: [...tasks[action.status], action.task],
    };
  }
  if (action.type === 'MOVE_TASK') {
    const { fromStatus, toStatus, task } = action;
    return {
      ...tasks,
      [fromStatus]: tasks[fromStatus].filter((t) => t.id !== task.id),
      [toStatus]: [...tasks[toStatus], task],
    };
  }

  if (action.type === 'REMOVE_TASK') {
    const { status, task } = action;
    return {
      ...tasks,
      [status]: tasks[status].filter((_task) => _task.id !== task.id),
    };
  }

  return tasks;
};
