import React from 'react';
import TodoInfo from './TodoInfo';
import { Todo } from '../data/todo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todos__list">
    {todos.map(todo => (
      <li key={todo.id} className="todos-item">
        <TodoInfo
          title={todo.title}
          status={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
