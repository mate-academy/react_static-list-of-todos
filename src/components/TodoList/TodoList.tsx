import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todo: PreparedTodo[];
};

export const TodoList:React.FC<Props> = (props) => (
  <ul className="to-do__list">
    {props.todo.map((todo) => (
      <li className="to-do__list-item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
