import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';
import TodoUser from '../TodoUser/TodoUser';
import TodoResult from '../TodoResult/TodoResult';

const TodoRow = ({ todo }) => (
  <tr className="todo__row">
    <TodoItem item={todo.title} />
    <TodoUser user={todo.user.name} email={todo.user.email} />
    <TodoResult result={todo.completed} />
  </tr>
);

TodoRow.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(PropTypes.string.isRequired,)
      .isRequired,
  }).isRequired,
};

export default TodoRow;
