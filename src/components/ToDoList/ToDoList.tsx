import React from 'react';

import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import './ToDoList.scss';

type Props = {
  preparedList: PreparedToDo[],
};

export const ToDoList: React.FC<Props> = ({ preparedList }) => (
  <ul className="taskList">
    {preparedList.map(toDo => (
      <li className="taskList__task" key={toDo.id}>
        <ToDoInfo
          title={toDo.title}
          completed={toDo.completed}
          user={toDo.user}
        />
      </li>
    ))}
  </ul>
);
