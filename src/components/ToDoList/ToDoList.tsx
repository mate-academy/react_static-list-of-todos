import React from 'react';
import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import { ToDo } from '../../types/ToDo';
import './ToDoList.scss';

type Props = {
  list: ToDo[];
};

export const ToDoList: React.FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(item => (
      <li key={item.userId} className="list__item item">
        <ToDoInfo
          user={item.user}
          title={item.title}
          completed={item.completed}
        />
      </li>
    ))}
  </ul>
);
