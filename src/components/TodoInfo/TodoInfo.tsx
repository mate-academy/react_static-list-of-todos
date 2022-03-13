import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = Partial<Todo>;

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <div className="TodoInfo" data-check={completed}>
    <div className="TodoInfo__task">
      {completed
        ? <input type="checkbox" checked readOnly />
        : <input type="checkbox" readOnly />}

      <p className="TodoInfo__title">
        {title}
      </p>
    </div>

    {user && <UserInfo name={user.name} email={user.email} website={user.website} />}
  </div>
);
