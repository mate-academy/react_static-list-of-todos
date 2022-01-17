import React from 'react';

import { ToDo } from '../../types/ToDo';
import { User } from '../../types/User';

import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import './ToDoList.scss';

type Props = {
  toDos: ToDo[],
  users: User[],
};

export const ToDoList: React.FC<Props> = ({ toDos, users }) => {
  const preparedList = toDos.map((toDo: ToDo) => (
    {
      ...toDo,
      user: users.find(user => (
        user.id === toDo.userId
      )) || null,
    }
  ));

  return (
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
};
