import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';
import { PreparedTodo } from '../../types/types';

type Props = {
  todo: PreparedTodo[];
};

export const TodoList:React.FC<Props> = (props) => {
  return (
    <ul className="to-do__list">
      {props.todo.map((goal: PreparedTodo) => (
        <li className="to-do__list-item" key={goal.id}>
          <TodoInfo goal={goal} />
        </li>
      ))}
    </ul>
  );
};
