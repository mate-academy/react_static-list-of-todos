import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import '../../App.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul>
    {todos.map(({
      title, completed, userId, user,
    }) => (
      <li key={userId} className={completed === true ? 'done' : 'not'}>
        <UserInfo user={user} />
        <TodoInfo
          title={title}
          completed={completed}
        />
      </li>
    ))}
  </ul>
);
