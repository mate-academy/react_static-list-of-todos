import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todo: PreparedTodo[];
};

export const TodoList:React.FC<Props> = (props) => (
  <ul className="to-do-list">
    {props.todo.map((todo) => (
      <li className="to-do-list__item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
