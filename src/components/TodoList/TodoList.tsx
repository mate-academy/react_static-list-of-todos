import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <table className="todo">
      <thead className="todo__head">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          <tr
            className={classNames(
              {
                'todo__body--completed': todo.completed,
                'todo__body--failed': !todo.completed,
              },
            )}
            key={todo.id}
          >
            <TodoInfo todoItem={todo} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
