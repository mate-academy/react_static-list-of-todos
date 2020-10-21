import React from 'react';
import './ListRow.scss';

import { TodoListShape } from '../shapes/TodoListShape';
import { Todo } from '../Todo';

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
          <Todo {...todo} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = TodoListShape;
