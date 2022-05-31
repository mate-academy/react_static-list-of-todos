// Don't forget to import the React library
import React from 'react';
import { PreparedTodos } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
interface Props {
  todoInfo: PreparedTodos,
}

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => {
  return (
    <>
      <li
        key={todoInfo.id}
        className={todoInfo.completed
          ? 'message block is-success'
          : 'message block is-danger'}
      >
        <div className="message-header">
          <h1 data-cy="title">{`${todoInfo.title}`}</h1>
        </div>
        <div className="message-body">
          <p data-cy="status">
            {`status: ${todoInfo.completed ? 'Done' : 'Need to do'}`}
          </p>
          {(todoInfo.user !== null) && <UserInfo user={todoInfo.user} />}
        </div>
      </li>
    </>
  );
};
