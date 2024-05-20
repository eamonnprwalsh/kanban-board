import React from 'react';
import useTasks from '../hooks/useTasks';

const Header = () => {
  const allTasks = useTasks();
  return (
    <header id="page-header">
      <h1 className="text-2xl font-bold">Task List</h1>
      <p id="number-of-items">
        {allTasks.length} {allTasks.length === 1 ? 'task' : 'tasks'}
      </p>
    </header>
  );
};

export default Header;
