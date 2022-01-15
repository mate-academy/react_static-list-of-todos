import { Todo } from '../Types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="todoItem">
        {todo.user
          ? <UserInfo user={todo.user} />
          : null}
        <br />
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
