import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li className={`list-group-item ${todo.completed ? 'active' : ''} `} key={todo.id}>
    <UserInfo user={todo.user} />
    <p>
      <strong>Task:</strong>
      {' '}
      {todo.title}
    </p>
    {todo.completed
      ? (
        <span>
          <strong>Status: </strong>
          Completed
        </span>
      )
      : (
        <span>
          <strong>Status: </strong>
          Not completed
        </span>
      )}
  </li>
);
