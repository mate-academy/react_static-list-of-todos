import React from 'react';
import { PreparedTodos } from '../interfaces/interfaces';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodos[],
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul className="todo-list">
      {preparedTodos.map(todo => (
        <li key={todo.id} className="todo-list__item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
