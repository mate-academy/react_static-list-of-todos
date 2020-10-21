import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { TodoShape } from './shapes/TodoShape';

export const TodoList = ({ tasks }) => (
  <ul>
    {
      tasks.map(task => (
        <Todo key={task.id} {...task} />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(TodoShape).isRequired,
};
