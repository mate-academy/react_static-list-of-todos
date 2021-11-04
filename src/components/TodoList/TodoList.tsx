import React from 'react';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodosItem } from '../../types/TodosItem';

type TodosList = {
  doList: TodosItem[],
};

export const TodoList: React.FC <TodosList> = ({ doList }) => (
  <ul className="toDoList">
    {doList.map(toDoItem => (
      <TodoInfo {...toDoItem} key={toDoItem.id} />
    ))}
  </ul>
);
