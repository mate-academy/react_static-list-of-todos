import { FC } from 'react';
import { PreparedTodo } from '../types';
import UserInfo from '../UserInfo/UserInfo';

interface TodoInfoProps {
  todo: PreparedTodo,
}

const TodoInfo: FC<TodoInfoProps> = ({ todo }) => (
  <>
    <UserInfo user={todo.user} />
    <p data-cy="title">{todo.title}</p>
    <p data-cy="status">
      Completed:
      {todo.completed ? ' Done' : ' In progress'}
    </p>
  </>
);

export default TodoInfo;
