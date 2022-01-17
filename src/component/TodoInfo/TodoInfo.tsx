import { Todo } from '../../types/Types';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type PropsTodo = {
  todo: Todo
};

export const TodoInfo: React.FC<PropsTodo> = ({ todo }) => (
  <div className="todo">
    <h2 className="todo__title">{todo.title}</h2>
    <div className={`todo__completed ${!todo.completed ? 'false' : ''}`}>
      Completed status :
      {todo.completed ? 'true' : 'false'}
    </div>
    <div className="todo__user">
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  </div>
);
