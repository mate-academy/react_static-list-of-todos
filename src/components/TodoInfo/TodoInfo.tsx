// Don't forget to import the React library
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../react-app-env';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user && (
      <UserInfo
        name={todo.user.name}
        email={todo.user.email}
      />
    )}
    <h4 className="todo__title" data-cy="title">{todo.title}</h4>
    <p
      className="todo__complited"
      data-cy="status"
    >
      {todo.completed ? 'completed' : 'not completed'}
    </p>
  </>
);

export default TodoInfo;
