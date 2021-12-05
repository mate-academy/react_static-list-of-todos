import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="container">
      <ul className="todoList">
        {todos.map((todo) => (
          <TodoInfo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
