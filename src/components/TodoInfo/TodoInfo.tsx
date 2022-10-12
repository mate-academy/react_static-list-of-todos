import { FC } from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: FC<Props> = ({
  todo: {
    title,
    completed,
    user,
  },
}) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': completed,
    },
  )}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
