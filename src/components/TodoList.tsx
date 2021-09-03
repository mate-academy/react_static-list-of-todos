import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li
          className={classNames(
            {
              'list-group-item': true,
              'list-group-item-action': true,
              'list-group-item-success': todo.completed,
              'list-group-item-danger': !todo.completed,
            },
          )}
          key={todo.id}
        >
          <TodoInfo todoItem={todo} />
        </li>
      ))}
    </ul>
  );
};
