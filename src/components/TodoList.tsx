import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="todolist">
      {todos.map(todo => (
        <li
          className={classNames(
            'todolist__item',
            {
              'todolist__item-done': todo.completed,
              'todolist__item-undone': !todo.completed,
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
