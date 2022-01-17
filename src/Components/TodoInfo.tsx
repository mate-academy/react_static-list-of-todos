import { Todo } from '../Types/Todo';
import { UserInfo } from './UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {`task: ${todo.title}`}
    <br />
    {`completed: ${todo.completed}`}
    <br />
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
