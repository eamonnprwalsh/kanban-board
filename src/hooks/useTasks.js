import { useContext, useMemo } from 'react';
import { TasksContext } from '../context/context';

const useTasks = (status) => {
  const tasks = useContext(TasksContext);
  return useMemo(() => tasks[status] || [], [tasks, status]);
};

export default useTasks;
