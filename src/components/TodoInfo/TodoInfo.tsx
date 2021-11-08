import React from 'react';
import { Todo } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { UserInfoAbsent } from '../UserInfo/UserInfoAbsent';

interface Props {
  todoItem: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todoItem }) => {
  const {
    title, completed, foundUser, id,
  } = todoItem;

  return (
    <li className={`todo-list__item ${completed === true ? 'todo-list__item--completed' : ''}`}>
      <h2 className="todo-list__title">{`#${id} - ${title}`}</h2>
      <strong className={`todo-list__status ${completed === true ? 'todo-list__status--completed' : ''}`}>
        {completed ? 'Done!' : 'In progress...'}
      </strong>
      {foundUser
        ? <UserInfo user={foundUser} />
        : <UserInfoAbsent />}
    </li>
  );
};
