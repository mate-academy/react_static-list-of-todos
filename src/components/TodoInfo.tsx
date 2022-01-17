import React from 'react';

import { UserInfo } from './UserInfo';

export const TodoInfo: React.FC<PreparedTodos> = ({
  title,
  completed,
  user,
}) => (
  <div className={`${completed
    ? 'ui green card item'
    : 'ui red card item'}`}
  >
    <div className="content">
      <div className="header">
        {`Todo: ${title}`}
      </div>
    </div>
    {user && <UserInfo {...user} />}
    <div className="extra content">
      {completed
        ? <button type="button" className="ui green button">Completed</button>
        : <button type="button" className="ui red button">Uncompleted</button>}
    </div>
  </div>
);
