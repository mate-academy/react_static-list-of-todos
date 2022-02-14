import { PreparedTodo } from '../../../types/PreparedTodo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  preparedTodo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ preparedTodo }) => (
  <div className="todo">
    <h2 className="todo__title">
      {preparedTodo.todo.title.toUpperCase()}
    </h2>
    <p className="todo__completed">
      <strong>{'Completed: '.toUpperCase()}</strong>
      {preparedTodo.todo.completed ? 'Done!' : 'Not ready...'}
    </p>
    {preparedTodo.user && <UserInfo user={preparedTodo.user} />}
  </div>
);
