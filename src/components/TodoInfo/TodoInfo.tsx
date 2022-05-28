import React from 'react';
import { FullTodo } from '../../react-app-env';
import { UserAdditionInfo } from '../UserAdditionInfo/UserAdditionInfo';

type Props = {
  todo: FullTodo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div data-cy="title">{`TO DO: ${todo.title}`}</div>
    <div data-cy="status">{`STATUS: ${todo.completed}`}</div>
    <div>{todo.user ? <UserAdditionInfo user={todo.user} /> : ''}</div>
  </>
);

export default TodoInfo;
