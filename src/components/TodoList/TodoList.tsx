import React from 'react';
import './TodoList.scss';
import { FullTodo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Props {
  listOfTodos: FullTodo[],
}

export const TodoList: React.FC<Props> = ({ listOfTodos }) => (
  <ul className="todo-list">
    {listOfTodos.map(item => (
      <li className="todo-list__item" key={item.id}>
        <TodoInfo fullTodo={item} />
      </li>
    ))}
  </ul>
);
