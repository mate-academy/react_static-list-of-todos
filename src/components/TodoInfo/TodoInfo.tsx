import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../types/preparedTodos';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;
  const completion = completed ? 'Completed' : 'Not yet!';

  return (
    <>
      <h4>{title}</h4>
      <p>{completion}</p>
      {user && <UserInfo user={user} />}
    </>
  );
};
