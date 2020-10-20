import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ src }) => (
  <>
    {src.map(task => (
      <Todo {...task} key={task.id} />
    ))}
  </>
);

TodoList.propTypes = {
  src: PropTypes.arrayOf(
    PropTypes.shape = {
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape = {
        name: PropTypes.string.isRequired,
      }.isRequired,
    },
  ).isRequired,
};
