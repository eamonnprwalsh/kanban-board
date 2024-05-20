import { useContext, useMemo } from 'react';
import { TasksContext } from '../context/context';

const useTasks = (status) => {
  const tasks = useContext(TasksContext);

  return useMemo(() => {
    if (status === undefined) {
      return Object.values(tasks).flat();
    }
    return tasks[status] || [];
  }, [tasks, status]);
};

export default useTasks;
