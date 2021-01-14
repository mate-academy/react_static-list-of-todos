import React from 'react';
import User from '../User/User';
import { TypeTodoItem } from '../types';
import './TodoItem.scss';

function TodoItem({ title, completed, user }) {
  return (
    <tr className="row table__row">
      <td className="row__task">
        {title}
      </td>

      <td className="row__status">
        {completed ? 'Done' : 'In progress'}
      </td>

      <td className="row__name">
        <User user={user} />
      </td>
    </tr>
  );
}

TodoItem.propTypes = TypeTodoItem.isRequired;

export default TodoItem;
