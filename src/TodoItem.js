import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (

  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed ? `completed` : `not completed`}</td>
    <User user={todo.user} />
  </tr>
);

TodoItem.propTypes = { todo: PropTypes.string.isRequired };

export default TodoItem;
