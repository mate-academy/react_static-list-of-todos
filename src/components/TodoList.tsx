import React from 'react';
import classNames from 'classnames';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/todo';
import '../styles/TodoList.scss';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo-list">
    <h1 className="todo-list__title">Static list of todos</h1>
    <div className="container">
      <span className="
        todo-list__item
        todo-list__item--firstline"
      >
        Name
      </span>
      <span className="
        todo-list__item
        todo-list__item--firstline"
      >
        Email
      </span>
      <span className="
        todo-list__item
        todo-list__item--firstline"
      >
        ToDo
      </span>
      <span className="
        todo-list__item
        todo-list__item--firstline"
      >
        Status
      </span>
    </div>
    <ul className="todoList">
      {todos.map((todo) => (
        todo.user
        && (
          <li
            className={classNames(
              'todoList__item',
              {
                'todoList__item--completed': todo.completed,
              },
            )}
            key={todo.id}
          >
            <UserInfo
              user={todo.user}
            />
            <TodoInfo
              todo={todo}
            />
          </li>
        )
      ))}
    </ul>
  </div>
);
