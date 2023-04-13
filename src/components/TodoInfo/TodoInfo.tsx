import { FC } from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: FC<Props> = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article
      className={
        classNames('TodoInfo', { 'TodoInfo--completed': completed })
      }
      key={todo.id}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {
        user
          ? <UserInfo user={user} />
          : <p>Unknown user</p>
      }
    </article>
  );
};
