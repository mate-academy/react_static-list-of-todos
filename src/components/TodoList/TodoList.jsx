import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const TodoList = ({ prepTodos }) => (
  <ul>
    {prepTodos.map(task => (
      <User {...task} key={task.id} />
    ))}
  </ul>
);

const TypeTasks = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
});

const TypeTodos = PropTypes.shape({
  fullName: PropTypes.string.isRequired,
  tasks: TypeTasks,
});

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(
    TypeTodos,
  ).isRequired,
};
