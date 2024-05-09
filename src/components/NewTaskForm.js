import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text, category };
    onTaskFormSubmit(newTask);
    setText('');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task description"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.slice(1).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
