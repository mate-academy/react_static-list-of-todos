import React from 'react';
import TodoInfo from './TodoInfo';
import { Todo } from '../types';

type Props = {
  preparedTodos: Todo[],
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo">
    {preparedTodos.map(todo => (
      <li className="todoItem" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
// ars - {todos: [{obj}, {obj},...]}
