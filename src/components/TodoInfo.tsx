import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import './Todo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo">
      <UserInfo user={todo.user} />
      <p className="todo__title">{todo.title}</p>
      {todo.completed
        ? <span className="todo__status-completed">Completed</span>
        : <span className="todo__status-not">Not completed</span>}
    </div>
  );
};
