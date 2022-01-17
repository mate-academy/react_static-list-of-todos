import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  let toDoItem = 'todo__item-box';

  if (todo.completed) {
    toDoItem += ' todo__item-box--complited';
  }

  return (
    <div className={toDoItem}>
      <UserInfo user={todo.user} />
      <h2 className="todo__title">{`Todo: ${todo.title}`}</h2>
      {todo.completed
        ? <span className="todo__completed">Completed</span>
        : <span className="todo__notCompleted">Not completed</span>}
    </div>
  );
};
