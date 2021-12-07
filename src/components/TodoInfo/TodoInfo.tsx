import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Todo = {
  title: string,
  completed: boolean,
  user: User | null,
};

type User = {
  name:string,
  email:string,
};

export const TodoInfo: React.FC<Todo> = (todo) => (
  <>
    <h2>{todo.title}</h2>
    <p>{todo.completed ? (<span className="completed">Completed</span>) : (<span className="pending">Pending</span>)}</p>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </>
);
