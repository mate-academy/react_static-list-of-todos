import React from 'react';
import PropTypes from 'prop-types';
import Users from './Users';

const TodoItem = ({ todo }) => (
  <tr>
    <td className="tr">{todo.id}</td>
    <td className="tr">{todo.title}</td>
    <td className="tr">
      <Users user={todo.user} />
    </td>
  </tr>
);

TodoItem.propTypes = { todo: PropTypes.string.isRequired };

export default TodoItem;
