import './TodoInfoStyle.scss';
import { TodoItem } from '../../types/TodoItem';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: TodoItem;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li className="todoList__item">
    <h3>{`Task №: ${todo.id} - ${todo.title}`}</h3>
    <div>{todo.completed ? 'completed' : 'not completed'}</div>
    {todo.user && <UserInfo user={todo.user} />}
  </li>
);
