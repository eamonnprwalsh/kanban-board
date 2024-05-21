import { memo } from 'react';

const Task = ({ task, status, handleMoveTask, handleRemoveTask }) => {
  return (
    <li className="task">
      {task.title}
      {status !== 'todo' && (
        <button onClick={() => handleMoveTask(task, 'left')}>Left</button>
      )}
      {status !== 'archived' && (
        <button onClick={() => handleMoveTask(task, 'right')}>Right</button>
      )}
      <button onClick={() => handleRemoveTask(task)}>Remove</button>
    </li>
  );
};

export default memo(Task);
