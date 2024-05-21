import { memo, useState } from 'react';
import useActions from '../hooks/useActions';
import { v4 as uuid } from 'uuid';

const AddTask = ({ status }) => {
  const { addTask } = useActions();
  const [inputValue, setInputValue] = useState('');

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

  return (
    <>
      <label htmlFor="textInput">Enter Text: </label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </>
  );
};

export default memo(AddTask);
