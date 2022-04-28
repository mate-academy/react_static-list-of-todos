import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

import './TodoList.scss';

type Props = {
  todos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li className="TodoList__item" key={todo.id}>
        <TodoInfo todo={todo} />
        <UserInfo user={todo.user} />
      </li>
    ))}
  </ul>
);
