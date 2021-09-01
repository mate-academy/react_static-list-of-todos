import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__header-title">Name</div>
        <div className="table__header-title">Email</div>
        <div className="table__header-title">Title</div>
        <div className="table__header-title">Status</div>
      </div>

      <div className="table__body">
        {todos.map((todo: Todo) => (
          <div
            className={classNames(
              'table__body-item',
              {
                active: todo.completed,
              },
            )}
            key={todo.id}
          >
            <TodoInfo todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
};
