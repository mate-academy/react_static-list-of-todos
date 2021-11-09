import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type TodoListProps = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames(
          'todo-list__item',
          {
            'todo-list__item--done': todo.completed,
          },
        )}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
