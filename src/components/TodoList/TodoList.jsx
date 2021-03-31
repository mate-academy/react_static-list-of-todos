import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import { TodoShapes } from '../../shapes/TodoShapes';

export const TodoList = ({ list }) => (
  <ul className="list">
    {list.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(TodoShapes),
  ).isRequired,
};
