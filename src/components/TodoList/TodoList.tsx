import React from 'react';
import './TodoList.scss';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <ul className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo {...todo} />
        </li>
      ))}
    </ul>
  </>
);
