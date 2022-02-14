import React from 'react';
import './TodoList.scss';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map((todo) => {
      const {
        title,
        completed,
        user,
        id,
      } = todo;

      return (
        <li className="todoList__item" key={id}>
          <TodoInfo
            title={title}
            completed={completed}
            user={user}
          />
        </li>
      );
    })}
  </ul>
);
