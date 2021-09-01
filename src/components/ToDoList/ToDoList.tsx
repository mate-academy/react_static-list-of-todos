import React from 'react';
import classNames from 'classnames';

import { ToDo } from '../../types/ToDo';

import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import './ToDoList.scss';

type Props = {
  todoList: ToDo[];
};

export const ToDoList: React.FC<Props> = (props) => {
  const { todoList } = props;

  return (
    <div className="ToDo">
      <h1 className="ToDo__header">
        ToDoList
      </h1>
      <ul className="ToDo__list">
        {todoList.map((todo: ToDo) => (
          <li
            className={classNames(
              'ToDo__list-item',
              {
                active: todo.completed,
              },
            )}
            key={todo.id}
          >
            <ToDoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
