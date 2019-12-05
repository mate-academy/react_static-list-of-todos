import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (

  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
    <td><User user={todo.user} /></td>
  </tr>
);

TodoItem.propTypes = { todo: PropTypes.string.isRequired };

export default TodoItem;
