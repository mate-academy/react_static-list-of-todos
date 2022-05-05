import React from 'react';
import classNames from 'classnames';
import { List } from '../../type/typeList';
import TodoInfo from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  toDoAndUser: List[];
};

const TodoList: React.FC<Props> = ({ toDoAndUser }) => (
  <ul className="toDoList">
    {
      toDoAndUser.map((list) => (
        <li
          className={
            classNames('toDoItem', { toDoItemActive: list.completed })
          }
          key={list.id}
        >
          {
            list.user && (
              <TodoInfo usersInfo={list} />
            )
          }
        </li>
      ))
    }
  </ul>
);

export default TodoList;
