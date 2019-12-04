import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

function TodoItem({ todo }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'true' : 'false'}</td>
      <User user={todo.user} />
    </tr>
  );
}

// TodoItem.propType = { todo: PropTypes.objectOf(PropTypes.any).isRequired };
TodoItem.propTypes = { todo: PropTypes.string.isRequired };

export default TodoItem;
