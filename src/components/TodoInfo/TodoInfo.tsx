import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = {
  toDo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ toDo }) => (
  <div className="toDoInfo">
    <h1 className="toDoInfo__title">
      {toDo.title}
    </h1>
    <div>
      <div className={classNames('toDoInfo__completeFiedl',
        { toDoInfo__completeFiedl_true: toDo.completed })}
      >
        <label htmlFor="completedCheckbox">Completed:</label>
        <input
          id="completedCheckbox"
          type="checkbox"
          checked={toDo.completed}
          readOnly
        />
      </div>
      {toDo.user && <UserInfo user={toDo.user} />}
    </div>
  </div>
);
