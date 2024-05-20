import React, { memo, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Task from './Task';
import useTasks from '../hooks/useTasks';
import useActions from '../hooks/useActions';
import { statuses } from '../constants';

const Status = memo(({ title, status }) => {
  const tasks = useTasks(status);
  const { addTask, moveTask, removeTask } = useActions();
  const [inputValue, setInputValue] = useState('');
  const [previousTaskCount, setPreviousTaskCount] = useState(tasks.length);

  useEffect(() => {
    console.log('firing useeEffect');
    if (tasks.length > previousTaskCount) {
      alert(`Task added to ${title}`);
    }
    setPreviousTaskCount(tasks.length);
  }, [tasks.length, previousTaskCount, title]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const task = { id: uuid(), title: inputValue };
    addTask(status, task);
    setInputValue('');
  };

  const handleMoveTask = (task, direction) => {
    const currentIndex = statuses.indexOf(status);
    let newIndex = currentIndex;

    if (direction === 'left') {
      newIndex = Math.max(currentIndex - 1, 0);
    } else if (direction === 'right') {
      newIndex = Math.min(currentIndex + 1, statuses.length - 1);
    }

    const toStatus = statuses[newIndex];
    moveTask(status, toStatus, task);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      <label htmlFor="textInput">Enter Text: </label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            status={status}
            handleMoveTask={handleMoveTask}
            handleRemoveTask={() => removeTask(status, task)}
          />
        ))}
      </ul>
    </div>
  );
});

export default Status;
