import { useEffect, useReducer } from 'react';
import { tasksReducer } from '../lib/reducer';
import { ActionsContext, TasksContext } from './context';
import { initialState } from '../lib/initialState';

const ColumnProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch({ type: 'REHYDRATE_TASKS', tasks: JSON.parse(storedTasks) });
    }
  }, []);

  return (
    <ActionsContext.Provider value={dispatch}>
      <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
    </ActionsContext.Provider>
  );
};

export default ColumnProvider;
