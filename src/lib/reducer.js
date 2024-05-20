export const tasksReducer = (tasks, action) => {
  let updatedTasks = { ...tasks };

  if (action.type === 'ADD_TASK') {
    updatedTasks[action.status] = [...tasks[action.status], action.task];
  }

  if (action.type === 'MOVE_TASK') {
    const { fromStatus, toStatus, task } = action;
    updatedTasks[fromStatus] = tasks[fromStatus].filter(
      (t) => t.id !== task.id
    );
    updatedTasks[toStatus] = [...tasks[toStatus], task];
  }

  if (action.type === 'REMOVE_TASK') {
    const { status, task } = action;
    updatedTasks[status] = tasks[status].filter(
      (_task) => _task.id !== task.id
    );
  }

  if (action.type === 'REHYDRATE_TASKS') {
    updatedTasks = action.tasks;
  }

  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  return updatedTasks;
};
