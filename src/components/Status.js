import React, { useCallback } from 'react';
import Task from './Task';
import useTasks from '../hooks/useTasks';
import useActions from '../hooks/useActions';
import { statuses } from '../constants';
import AddTask from './AddTask';

const Status = ({ title, status }) => {
  const tasks = useTasks(status);
  const { moveTask, removeTask } = useActions();

  const handleMoveTask = useCallback(
    (task, direction) => {
      const currentIndex = statuses.indexOf(status);
      let newIndex = currentIndex;

      if (direction === 'left') {
        newIndex = Math.max(currentIndex - 1, 0);
      } else if (direction === 'right') {
        newIndex = Math.min(currentIndex + 1, statuses.length - 1);
      }

      const toStatus = statuses[newIndex];
      moveTask(status, toStatus, task);
    },
    [status, moveTask]
  );

  const handleRemoveTask = useCallback(
    (task) => {
      removeTask(status, task);
    },
    [status, removeTask]
  );

  return (
    <div className="column">
      <h2>{title}</h2>
      <AddTask status={status} />
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            status={status}
            handleMoveTask={handleMoveTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Status;
