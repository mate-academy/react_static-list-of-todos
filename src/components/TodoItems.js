import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td className="state">{todo.completed ? 'ready' : 'not ready'}</td>
    <td><User user={todo.user} /></td>
  </tr>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};
export default TodoItem;
