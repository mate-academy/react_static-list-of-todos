import { TodoItem } from '../types/TodoItem';
import { TodoInfo } from './TodoInfo/TodoInfo';
import { UserInfo } from './UserInfo';

type Props = {
  prepareTodos: TodoItem[],
};

export const TodoList: React.FC<Props> = ({ prepareTodos }) => (
  <ul className="todoList">
    {prepareTodos.map(item => (
      <li className="todoInfo" key={item.id}>
        <TodoInfo todo={item} />
        <UserInfo user={item.user} />
      </li>
    ))}
  </ul>
);
