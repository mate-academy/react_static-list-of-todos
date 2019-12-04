import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/user';

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>

    <User person={todo.user} />

    <td>{todo.completed === true ? 'completed' : 'no completed'}</td>
  </tr>
);

TodoItem.propTypes
  = {
    todo: PropTypes
      .oneOfType([PropTypes.object])
      .isRequired,
  };

export default TodoItem;
