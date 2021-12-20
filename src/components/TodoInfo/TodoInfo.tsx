import React from 'react';
import { Todo } from '../../types/Todo';
import UserInfo from '../UserInfo/UserInfo';

type Props = Pick<Todo, 'title' | 'completed' | 'user'>;

const TodoInfo: React.FC<Props> = (todo) => {
  return (
    <>
      <h2>{todo.title}</h2>
      <span style={{ color: todo.completed ? 'green' : 'red' }}>
        {todo.completed ? 'Completed' : 'In proccess'}
      </span>
      <UserInfo user={todo.user} />
    </>
  );
};

export default TodoInfo;
