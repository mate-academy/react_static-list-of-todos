import React from 'react';

import ToDo from '../types/ToDo';
import UserInfo from './UserInfo';

import './ToDo.scss';

type Props = {
  todo: ToDo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  const compStatus = todo.completed ? 'Done' : 'In process';

  return (

    <div className="list__todo">
      {todo.user && <UserInfo user={todo.user} />}
      <div className="list__title">
        {todo.title}
      </div>
      <div className="list__status">
        {compStatus}
      </div>
    </div>
  );
};

export default TodoInfo;
