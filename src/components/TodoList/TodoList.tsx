import React from 'react';
import './TodoList.scss';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

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

      let name;
      let email;

      if (user) {
        ({ name, email } = user);
      }

      return (
        <li className="todoList__item" key={id}>
          <UserInfo
            name={name}
            email={email}
          />
          <TodoInfo
            title={title}
            completed={completed}
          />
        </li>
      );
    })}
  </ul>
);
