import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../Types/Types';

import './TodoList.scss';

type Props = {
  commonData: Todo[],
};

export const TodoList: React.FC<Props> = ({ commonData }) => {
  return (
    <ul className="list">
      {commonData.map(todoUser => (
        <li className="item">
          <h2 className="item__todo">{todoUser.title}</h2>
          <section className="item__user">
            <UserInfo userInfo={todoUser.user} />
          </section>
          <h2 className="item__done">
            <TodoInfo status={todoUser.completed} />
          </h2>
        </li>
      ))}
    </ul>
  );
};
