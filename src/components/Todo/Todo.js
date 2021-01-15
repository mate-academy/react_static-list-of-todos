import React from 'react';
import User from '../User/User';
import { TaskType } from '../Types/Types';

const Todo = ({ task }) => (
  <p>
    <strong>User:</strong>
    &ensp;
    <User user={task.user} />
    &emsp;
    <strong>Task:</strong>
    &ensp;
    {task.title}
    &emsp;
    <strong>Status:</strong>
    &ensp;
    {task.completed ? 'Done.' : 'In progress...'}
  </p>
);

Todo.propTypes = {
  task: TaskType.isRequired,
};

export default Todo;
