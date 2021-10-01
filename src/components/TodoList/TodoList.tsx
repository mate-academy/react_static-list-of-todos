import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames(
            'list__item',
            { 'list__item--active': todo.completed },
          )}
        >
          {todo.user && <UserInfo user={todo.user} />}
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
