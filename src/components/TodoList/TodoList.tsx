import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../Type/Todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <>
      <li className="list_title list_row">
        <div className="list_item">UserName</div>
        <div className="list_item">Name</div>
        <div className="list_item">Email</div>
        <div className="list_item">Title</div>
        <div className="list_item">Completed</div>
      </li>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={classNames(
            'list_row',
            { 'list_row--done': todo.completed },
          )}
        >
          <TodoInfo element={todo} />
        </li>
      ))}
    </>
  );
};
