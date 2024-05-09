import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', category: 'Work' },
    { id: 2, text: 'Task 2', category: 'Personal' },
    { id: 3, text: 'Task 3', category: 'Work' },
    { id: 4, text: 'Task 4', category: 'Study' },
  ]);

  const categories = ['All', 'Work', 'Personal', 'Study'];

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter categories={categories} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
      <NewTaskForm categories={categories} onTaskFormSubmit={addTask} />
    </div>
  );
};

export default App;
