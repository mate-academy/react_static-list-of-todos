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
        ? <button className="ui green button" type="button">Completed</button>
        : <button className="ui red button" type="button">Not completed</button>}
    </div>
  );
};
