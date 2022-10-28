import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul>
    {todos.map(({
      title, completed, userId, user,
    }) => (
      <li key={userId}>
        <UserInfo user={user} />
        <TodoInfo
          title={title}
          completed={completed}
        />
      </li>
    ))}
  </ul>
);
