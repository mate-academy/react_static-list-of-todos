// Add the required types and props
import classNames from 'classnames';
import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: FC<Props> = ({ todo }) => {
  const {
    user,
    completed,
    title,
  } = todo;

  return (
    <article
      className={classNames('TodoInfo',
        { 'TodoInfo--completed': completed },
        { completedColor: completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (<UserInfo user={user} />)}
    </article>
  );
};
