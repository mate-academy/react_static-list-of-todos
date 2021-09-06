import React from 'react';
import classNames from 'classnames';

import './TodoList.scss';
import { TodoInfo } from '../todoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <table className="table">
      <thead className="table__header">
        <th className="table__header-title">Name</th>
        <th className="table__header-title">UserName</th>
        <th className="table__header-title">Email</th>
        <th className="table__header-title">Title</th>
        <th className="table__header-title">Status</th>
      </thead>

      <tbody className="table__body">
        {todos.map((todo: Todo) => (
          <tr
            className={classNames(
              'table__body-item',
              {
                active: todo.completed,
              },
            )}
            key={todo.id}
          >
            <TodoInfo todo={todo} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
