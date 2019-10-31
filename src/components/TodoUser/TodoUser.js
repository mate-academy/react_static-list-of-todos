import React from 'react';

const TodoUser = ({ user, email }) => (
  <td className="todo__cell todo__cell_user">
    <a href={email}>{user}</a>
  </td>
);

export default TodoUser;
