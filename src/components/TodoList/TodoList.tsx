import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo">
    {preparedTodos.map(preparedTodo => (
      <li className="todo__item">
        <TodoInfo
          todo={preparedTodo}
          key={preparedTodo.id}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
