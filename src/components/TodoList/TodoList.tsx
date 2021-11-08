import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/types';
import './TodoList.scss';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="App__list">
    {todos.map(todo => (
      <li key={todo.id} className="App__list_item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
