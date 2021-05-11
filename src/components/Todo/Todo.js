import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

const taskManager = (param, task1, task2) => (param ? task1 : task2);

export const Todo = ({ title, completed }) => (
  <>
    <span>{title}</span>
    <span className={taskManager(completed, 'todo-completed', 'todo-uncompleted')}>
      {taskManager(completed, 'completed', 'in progress')}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
