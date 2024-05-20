const Task = ({ task, status, handleMoveTask, handleRemoveTask }) => (
  <li className="task">
    {task.title}
    {status !== 'todo' && (
      <button onClick={() => handleMoveTask(task, 'left')}>Left</button>
    )}
    {status !== 'archived' && (
      <button onClick={() => handleMoveTask(task, 'right')}>Right</button>
    )}
    <button onClick={() => handleRemoveTask()}>Remove</button>
  </li>
);

export default Task;
