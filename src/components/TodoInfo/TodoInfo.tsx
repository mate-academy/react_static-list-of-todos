import { FC } from 'react';
import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

export const TodoInfo: FC<Pick<Todo, 'user' | 'title'>> = ({ user, title }) => (
  <>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo name={user.name} email={user.email} />}
  </>
);
