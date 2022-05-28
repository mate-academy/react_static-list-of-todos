import React from 'react';
import { Todo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Props {
  prepTodos: Todo[];
}

export const TodoList: React.FC<Props> = ({ prepTodos }) => {
  return (
    <ul className="list-group">
      {prepTodos.map(object => (
        <li
          className="
            list-group-item
            list-group-item-action
            list-group-item-info"
          key={object.id}
        >
          <TodoInfo obj={object} />
        </li>
      ))}
    </ul>
  );
};
