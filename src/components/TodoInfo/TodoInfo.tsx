import React from 'react';
import { Todo } from '../types/Todo';
import UserInfo from '../UserInfo/UserInfo';
import './TodoInfo.scss';
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files

const TodoInfo: React.FC<Todo> = (todo) => (
  <div className="todo">

    <div className="todo__status" data-cy="status">
      <h3 className="todo__task">Task:</h3>
      {todo.completed
        ? (
          <div className="todo__status-item todo__status-item--complited">
            complited
          </div>
        )
        : (<div className="todo__status-item">In progress</div>)}
    </div>

    <h2 className="todo__title" data-cy="title">
      {todo.title}
    </h2>
    <div>
      <UserInfo user={todo.user} />
    </div>
  </div>
);

export default TodoInfo;
