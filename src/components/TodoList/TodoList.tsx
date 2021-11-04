import React from 'react';
import './TodoList.scss';
import { Result } from '../../typedefs';
import TodoInfo from '../TodoInfo';

type Props = {
  todos: Result[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map((whatTodo:Result) => (
      <TodoInfo
        key={whatTodo.id}
        title={whatTodo.title}
        completed={whatTodo.completed}
        user={whatTodo.user}
      />
    ))}
  </ul>
);
