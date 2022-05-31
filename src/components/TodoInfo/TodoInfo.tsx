import { PrepTodo } from '../../types';

interface Props {
  todo: PrepTodo
}
export const TodoInfo: React.FC<Props> = ({ todo }) => {
  let userInformation = '';

  if (todo.user) {
    userInformation
    = `${todo.user.name} ${todo.user.email}`;
  } else {
    userInformation = '';
  }

  return (
    <>
      <p>{todo.title}</p>
      <p>{todo.completed.toString()}</p>
      <p>{userInformation}</p>
    </>
)};
