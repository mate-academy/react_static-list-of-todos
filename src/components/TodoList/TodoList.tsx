import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li className={classNames(
          'todo-list__item',
          {
            'todo-list__item--completed': todo.completed === true,
          },
        )}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
