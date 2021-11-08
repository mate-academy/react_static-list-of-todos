import classNames from 'classnames';
import { Todo } from '../types';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export interface Props {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <ul className={classNames('todoInfo', { 'todoInfo__status--completed': completed })}>
      <li className="todoInfo__title">{title}</li>
      <li className="todoInfo__status">
        {completed ? 'completed' : 'in progress'}
      </li>
      <li>
        {user ? <UserInfo user={user} /> : 'No one is assigned'}
      </li>
    </ul>
  );
};
