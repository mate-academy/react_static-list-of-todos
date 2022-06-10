import React from 'react';
import { Props } from '../../types';
import './TodoList.scss';
import TodoInfo from '../TodoInfo/TodoInfo';

const TodoList: React.FC<Props> = ({ todosList = [] }) => (
  <ul className="todos-list">
    {todosList.map(item => (
      <li className={`todos-list__item ${item.completed ? 'todos-list__item--completed' : 'todos-list__item--not-completed'}`} key={item.id}>
        <TodoInfo todo={item} />
        <br />
      </li>
    ))}
  </ul>
);

export default TodoList;
