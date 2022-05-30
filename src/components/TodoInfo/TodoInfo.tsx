import React from 'react';
import { Todos } from '../../types/Todos';
import './TodoInfo.scss';

interface Props {
  todo: Todos;
}

export const TodoInfo : React.FC<Props> = ({ todo }) => (
  <ul className="todos">
    <li>
      {`TODO ID ${todo.id}`}
    </li>
    <li>
      {`TODO Title ${todo.title}`}
    </li>
  </ul>
);
