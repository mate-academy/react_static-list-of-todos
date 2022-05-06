import React from 'react';
import './TodoList.scss';
import classNames from 'classnames';

import { ToDo } from '../../interfaces/ToDo';
import { UserInfo } from '../UserInfo';

interface Props {
  preparedTodos: ToDo[],
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div className="todo-list">
    {preparedTodos.map(({
      id,
      title,
      completed,
      User,
    }) => (
      <>
        <div className={classNames('todo-card',
          { 'todo-card__done': completed === true })}
        >
          <div className="todo-title">
            <p>
              Title:&#160;&#160;
              {title}
            </p>
          </div>
          <div>
            Responsible person:&#160;
            <br />
          </div>
          <div className="todo-person">
            <p>
              {User ? (
                <UserInfo user={User} />
              ) : 'user not assigned'}
            </p>
          </div>
          <div>
            {'Task ID: '}
            {id}
          </div>
          <p>
            status:&#160;
            {completed ? 'Done' : 'Undone'}
          </p>
        </div>
      </>
    ))}
  </div>
);
