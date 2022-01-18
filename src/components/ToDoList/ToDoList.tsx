import React from 'react';

import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import './ToDoList.scss';

type Props = {
  preparedList: ToDo[],
};

export const ToDoList: React.FC<Props> = ({ preparedList }) => (
  <ul className="taskList">
    {preparedList.map(toDo => (
      <li className="taskList__task" key={toDo.id}>
        <ToDoInfo toDo={toDo} />
      </li>
    ))}
  </ul>
);
