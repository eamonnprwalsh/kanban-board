import { useReducer } from 'react';
import { tasksReducer } from '../lib/reducer';
import { initialState } from '../lib/initialState';
import { TasksContext, ActionsContext } from './context';

const ContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <ActionsContext.Provider value={dispatch}>
      <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
    </ActionsContext.Provider>
  );
};

export default ContextProvider;
