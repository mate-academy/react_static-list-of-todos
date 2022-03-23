import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = { todo: Todo };

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h1>
      {todo.title}
    </h1>

    <span>
      {`id: ${todo.id} | completed: ${todo.completed ? 'yes' : 'no'}`}
    </span>

    <UserInfo user={todo.user} />
  </>
);
