import { PreparedTodo } from './types';
import { UserInfo } from './UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo-info">
    <div className="todo-info__task">
      <input type="checkbox" checked={todo.completed} />
      <span>{ todo.title }</span>
    </div>
    { todo.user && (<div className="todo-info__author"><UserInfo user={todo.user} /></div>) }
  </div>
);
