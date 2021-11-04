import React from 'react';
import './TodoList.scss';
import { Result } from '../../react-app-env';
import TodoInfo from '../TodoInfo';

type Props = {
  todo: Result[],
};

export const TodoList: React.FC<Props> = ({ todo }) => (
  <ul className="list">
    {todo.map((whatTodo:Result) => (
      <TodoInfo key={whatTodo.id} {...whatTodo} />
    ))}
  </ul>
);
