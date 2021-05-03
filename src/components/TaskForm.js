import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      task: {
        title,
        body,
      },
    });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Task title'
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Task Details'
        value={body}
        required
        onChange={(e) => setBody(e.target.value)}
      />
      <input type='submit' value='Add Task' />
    </form>
  );
};

export default TaskForm;
