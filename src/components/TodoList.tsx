import React from 'react';
import { ITodo } from '../types/ITodo';
import './TodoList.scss';
import { Todo } from './Todo';

type Props = {
  todos: ITodo[],
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <div className="todos">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        completed={todo.completed}
        title={todo.title}
        author={todo.user}
      />
    ))}
  </div>
);
