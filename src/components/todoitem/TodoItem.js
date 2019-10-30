import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

function TodoItem({ todo }) {
  return (
    <tr>
      <td className="item-title">{todo.title}</td>
      <td className="item-user"><User user={todo.user} /></td>
      <td className="item-status">{todo.completed ? 'true' : 'false'}</td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
