import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ list }) => (
  <ul className="todos">
    {list.map(todo => (
      <Todo key={todo.id} element={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
