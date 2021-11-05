import classNames from 'classnames';
import users from '../../api/users';
import { Todo } from '../types';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, userId } = todo;
  const foundUser = users.find(user => user.id === userId);

  return (
    <ul className={classNames('todoInfo', { 'todoInfo__status--completed': completed })}>
      <li className="todoInfo__title">{title}</li>
      <li className="todoInfo__status">
        {completed ? 'completed' : 'in progress'}
      </li>
      <li>
        {foundUser ? <UserInfo user={foundUser} /> : 'No one is assigned'}
      </li>
    </ul>
  );
};
