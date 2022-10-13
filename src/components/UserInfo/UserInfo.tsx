import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

export const UserInfo: React.FC<Todo> = ({
  userId,
  id,
  title,
  completed,
  user,
}) => (
  <article
    className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
  >
    <h2
      className="TodoInfo__title"
    >
      {title}
    </h2>
    <a className="UserInfo" href="mailto:Sincere@april.biz">
      <span>
        userId:
        {userId}
      </span>
      <br />
      <span>
        id:
        {id}
      </span>
      <br />
      <span>
        title:
        {title}
      </span>
      <br />
      <span>
        completed:
        {completed ? 'true' : 'false'}
      </span>
      {user
        ? (
          <ul>
            <span>
              user
            </span>
            <li>
              {user?.name}
            </li>
            <li>
              {user?.id}
            </li>
            <li>
              {user?.email}
            </li>
          </ul>
        )
        : ''}
    </a>
  </article>
);
