import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </div>
);

const typeOfId = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(typeOfId).isRequired,
};
