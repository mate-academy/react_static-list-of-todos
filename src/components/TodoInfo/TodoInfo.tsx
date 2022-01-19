import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo:React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2 className="todo__title">{title}</h2>
    {completed
      ? (
        <h3
          className={classNames(
            'todo__condition',
            {
              'todo__condition-true': completed,
            },
          )}
        >
          Is completed
        </h3>
      )
      : (
        <h3
          className={classNames(
            'todo__condition',
            {
              'todo__condition-false': !completed,
            },
          )}
        >
          Is not completed
        </h3>
      )}

    {user && <UserInfo {...user} />}
  </>
);
