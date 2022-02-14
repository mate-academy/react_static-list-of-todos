import { FullTodo } from '../types/FullTodo';
import { UserInfo } from './UserInfo';

type Props = {
  fullTodo : FullTodo
};

export const TodoInfo: React.FC<Props> = ({ fullTodo }) => (
  <>
    <h3 className="todo-info__title">
      {`Task: ${fullTodo.title}`}
    </h3>
    <p>
      Status :
      {fullTodo.completed ? ' completed' : ' not completed'}
    </p>
    {fullTodo.user && <UserInfo user={fullTodo.user} /> }
  </>
);
