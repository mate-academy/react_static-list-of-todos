import React from 'react';
import PropTypes from 'prop-types';
import User from './Users';

function TodoItem({ todo }) {
  return (
    <tbody>
      <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed ? 'Done' : 'Unfulfilled'}</td>
        <User person={todo.user} />
      </tr>
    </tbody>
  );
}

TodoItem.propTypes = { todo: PropTypes.objectOf(PropTypes.any).isRequired };

export default TodoItem;
