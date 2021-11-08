import './TodoInfoStyle.scss';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li className="todoList__item">
    <h3>{`Task №: ${todo.id} - ${todo.title}`}</h3>
    <div>
      {
        todo.completed
          ? 'completed'
          : 'not completed'
      }
    </div>
    {todo.user && <UserInfo user={todo.user} />}
  </li>
);
