import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './TodosList.scss';

export const TodosList = ({ todos }) => (
  <div className="todoListContainer">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}

  </div>
);

TodosList.propTypes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
})).isRequired;
