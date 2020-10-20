import React from 'react';
import './ListRow.scss';

import { TodoShape } from '../shapes/TodoShapes';
import { User } from '../User';

export const TodoList = ({ todos }) => (
  <ul>
    <li className="ListRow ListRow--header">
      <div className="ListRow__status-col">status</div>
      <div>task</div>
      <div>user</div>
    </li>
    {
      todos.map(todo => (
        <li key={todo.id} className="ListRow">
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
            className="ListRow__input"
          />

          <div className="ListRow__description">
            {todo.title}
          </div>

          <User {...todo.user} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = TodoShape;
