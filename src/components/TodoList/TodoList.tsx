// import { UserInfo } from './UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type User = {
  name:string,
  email:string,
};

type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
};

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo title={todo.title} completed={todo.completed} user={todo.user} />
      </li>
    ))}
  </ul>
);
