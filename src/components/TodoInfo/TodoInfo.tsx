// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo = ({ todo }: Props) => (
  <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
