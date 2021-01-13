import React from 'react';
import { TaskType } from '../types';
import User from './User';
import './Todo.scss';

function Todo({ task }) {
  return (
    <div className="todo">
      <p>
        {`Task: ${task.title}`}
      </p>
      <p>
        {`Status: ${task.completed ? 'done' : 'not done'}`}
      </p>

      <User user={task.user} />
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  task: TaskType.isRequired,
};
