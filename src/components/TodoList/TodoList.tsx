import React from 'react';
import { ToDo } from '../../types/ToDo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files

type Props = {
  preparedTodos: ToDo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todos">
    {preparedTodos.map(toDo => (
      <li
        key={toDo.id}
        className={`todos__item ${toDo.completed ? 'todos__item--completed' : 'todos__item--not_completed'}`}
      >
        <TodoInfo
          title={toDo.title}
          completed={toDo.completed}
        />
        <UserInfo user={toDo.user} />
      </li>
    ))}
  </ul>
);
