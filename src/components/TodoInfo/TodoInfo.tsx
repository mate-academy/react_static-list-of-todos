import React from 'react';
import { PrepearedTodos } from '../../types/Todos';
import './TodoInfo.scss';

interface Props {
  todo: PrepearedTodos;
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
