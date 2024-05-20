import { useContext, useCallback } from 'react';
import { ActionsContext } from '../context/context';

const useActions = () => {
  const dispatch = useContext(ActionsContext);

  const addTask = useCallback(
    (status, task) => {
      dispatch({ type: 'ADD_TASK', status, task });
    },
    [dispatch]
  );

  const moveTask = useCallback(
    (fromStatus, toStatus, task) => {
      dispatch({ type: 'MOVE_TASK', fromStatus, toStatus, task });
    },
    [dispatch]
  );

  const removeTask = useCallback(
    (status, task) => {
      dispatch({ type: 'REMOVE_TASK', status, task });
    },
    [dispatch]
  );

  return { addTask, moveTask, removeTask };
};

export default useActions;
