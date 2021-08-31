import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/todo_info';
import { UserInfo } from '../UserInfo/user_info';
import { Todo } from '../Type/Todo';

type Props = {
  preTodo: Todo[];
};

export const TodoList: React.FC<Props> = ({ preTodo }) => {
  return (
    <>
      <li className="list_title list_row">
        <div className="list_item">UserName</div>
        <div className="list_item">Name</div>
        <div className="list_item">Email</div>
        <div className="list_item">Title</div>
        <div className="list_item">Completed</div>
      </li>
      {preTodo.map((ell) => (
        <li
          key={ell.id}
          className={classNames(
            'list_row',
            { 'list_row--done': ell.completed === true },
          )}
        >
          {ell.user ? <UserInfo user={ell.user} /> : null}

          <TodoInfo element={ell} />
        </li>
      ))}
    </>
  );
};
