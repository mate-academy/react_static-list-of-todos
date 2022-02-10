import { PreparedTodo } from '../../types/PreparedTodo';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  preparedTodo: PreparedTodo;
};

const TodoInfo: React.FC<Props> = ({ preparedTodo }) => (
  <>
    <h2>{preparedTodo.todo.title}</h2>
    <h3>{`Completed : ${preparedTodo.todo.completed ? 'yes' : 'no'}`}</h3>
    <UserInfo user={preparedTodo.user} />
  </>
);

export default TodoInfo;
