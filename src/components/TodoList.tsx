import Todo from './Interfaces';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

type Props = {
  todos: Todo[];
  title: string;
  completed: boolean;
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo title={todo.title} completed={todo.completed} />
        {todo.user && <UserInfo user={todo.user} />}
      </li>
    ))}
  </ul>
);
