import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <div className="TodoList">
      <ul className="TodoList__list">
        {preparedTodos.map(todo => (
          <li className="TodoList_Item">
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
