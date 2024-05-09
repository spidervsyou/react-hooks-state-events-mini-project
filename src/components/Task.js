import React from 'react';

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
