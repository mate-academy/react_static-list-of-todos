import React from 'react';

import users from '../../api/users';
import todos from '../../api/todos';

function TodoItem() {
  const todo = [...todos];

  return (
    <tbody>
      {todo.map(item => (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
            {users
              .filter(user => user.id === item.userId)
              .map(person => person.name)}
          </td>
          <td>
            {item.completed === true ? 'completed' : 'no completed'}
          </td>
          <td>
            {users
              .filter(user => user.id === item.userId)
              .map(person => person.email)}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TodoItem;
