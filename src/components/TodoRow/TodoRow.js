import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';
import TodoUser from '../TodoUser/TodoUser';
import TodoResult from '../TodoResult/TodoResult';

const TodoRow = ({ todo, user }) => (
  <tr className="todo__row">
    <TodoItem item={todo.title} />
    <TodoUser user={user.name} email={user.email} />
    <TodoResult result={todo.completed} />
  </tr>
);

TodoRow.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoRow;
