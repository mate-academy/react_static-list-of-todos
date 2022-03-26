import { ITodo } from '../../types/Interface';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: ITodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo__items-header">
    <div className={
      todo.completed ? 'todo__complited' : 'todo__complited--not'
    }
    />
    <p>
      {todo.title}
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </p>
  </div>
);
