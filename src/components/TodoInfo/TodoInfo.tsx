import { PrepTodo } from '../../types';
import { UserInfo } from '../UserInfo';

import './styleTodoInfo.scss';

interface Props {
  todo: PrepTodo
}
export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo-card">
      <label>
        <span className="todo-card__title">
          {todo.title}
        </span>
        {todo.completed
          ? <input type="checkbox" checked />
          : <input type="checkbox" />}
      </label>

      <p className="todo-card__user">
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
      </p>
    </div>
  );
};
