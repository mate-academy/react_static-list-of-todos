import React from 'react';
import { Todo } from '../../types/Todo';
import UserInfo from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="user" key={todo.id}>
      <p data-cy="title" className="user__title">
        {`To Do: ${todo.title}`}
      </p>

      <p data-cy="status" className="user__status">
        {todo.completed ? 'Status: Done' : 'Status: In progress'}
      </p>
    </div>

    {todo.user && <UserInfo user={todo.user} />}
  </>
);

export default TodoInfo;
