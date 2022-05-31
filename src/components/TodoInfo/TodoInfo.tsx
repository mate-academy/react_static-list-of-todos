import React from 'react';
import { FullTodo } from '../../react-app-env';
import { UserAdditionInfo } from '../UserAdditionInfo/UserAdditionInfo';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: FullTodo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div>{todo.user && <UserInfo user={todo.user} />}</div>
    <div data-cy="title">{`TO DO: ${todo.title}`}</div>
    <div data-cy="status">{`STATUS: ${todo.completed}`}</div>
    {todo.user && <UserAdditionInfo user={todo.user} />}
  </>
);

export default TodoInfo;
