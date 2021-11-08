import { FC } from 'react';
import { Todo } from '../typedefs';
import { UserInfo } from './UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: FC<Props> = (props) => {
  const { todo } = props;

  const { user, title, completed } = todo;

  return (
    <li className="userCard__item">
      <div className="userCard__top">
        <p className="userCard__title">{title}</p>
        <p className="userCard__status">{completed ? '✔️' : '❌'}</p>
      </div>
      { user && <UserInfo user={user} />}
    </li>
  );
};
