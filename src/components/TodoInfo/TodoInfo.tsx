import { FullTodo } from '../../FullTodo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo : FullTodo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h3 className="todo-info__title">
      {`Task: ${todo.title}`}
    </h3>
    <p>
      Status :
      {todo.completed ? ' finished' : ' in progress'}
    </p>
    {todo.user && <UserInfo user={todo.user} /> }
  </>
);
