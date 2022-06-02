import { FC } from 'react';
// import todos from '../../api/todos';
import { PreparedTodos } from '../../appTypeDef';
// import { TodoInfo } from '../TodoInfo/TodoInfo';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

interface UserInfoProps {
  user: PreparedTodos;
}

export const UserInfo: FC<UserInfoProps> = () => {
  return (
    <>
    </>
  );
};

// Add a default export statement for UserInfo component to use it in the other files
