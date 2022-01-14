import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const Todolist: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="list">
      {
        todos.map(todo => (
          <TodoInfo todo={todo} key={todo.id} />
        ))
      }
    </ul>
  );
};
