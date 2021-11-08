import React from 'react';
import './TodoList.scss';
import { Prepared } from '../../typedefs';
import TodoInfo from '../TodoInfo';

type Props = {
  todos: Prepared[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map((todo:Prepared) => (
      <TodoInfo
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        user={todo.user}
      />
    ))}
  </ul>
);
