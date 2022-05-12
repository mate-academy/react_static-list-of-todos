import React from 'react';
import { Todo } from '../../type/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todos">
    {todos.map(todo => (
      <li className="todo" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
