import React from 'react';
import { ToDos } from '../../types/ToDos';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: ToDos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="List">
    <ul className="List__item">
      {todos.map((item) => (
        <li key={item.id} className="List__li">
          <TodoInfo
            title={item.title}
            status={item.completed}
            user={item.user}
          />
        </li>
      ))}
    </ul>
  </div>
);
