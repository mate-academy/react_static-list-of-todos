import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from './Todo';

export const TodoList = ({ tasks }) => (
  <div className="todo-grid">
    {tasks.map(task => (
      <div className="card" key={task.id}>
        <Todo {...task} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
