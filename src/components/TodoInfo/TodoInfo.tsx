import { FC } from 'react';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

export const TodoInfo: FC<Todo> = ({ completed, title, user }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo {...user} />}
  </article>
);
