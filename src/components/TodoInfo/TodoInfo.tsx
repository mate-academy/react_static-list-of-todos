import React from 'react';
import { FullTodo } from '../../react-app-env';
import UserInfo from '../UserInfo/UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
type Props = {
  todo: FullTodo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h4 data-cy="title">{todo.title}</h4>
    <p data-cy="status">{todo.completed ? 'completed' : 'not completed'}</p>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </>
);

export default TodoInfo;
