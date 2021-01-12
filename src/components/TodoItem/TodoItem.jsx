import React from 'react';
import User from '../User/User';
import { typeTodoItem } from '../types';

function TodoItem({ title, completed, user }) {
  return (
    <>
      <tr>
        <td>
          <User data={user} />
        </td>
        <td>
          {title}
        </td>
        <td>
          {completed ? 'Done' : 'In progress'}
        </td>
      </tr>
    </>
  );
}

TodoItem.propTypes = typeTodoItem.isRequired;

export default TodoItem;
