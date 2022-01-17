import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    <UserInfo user={todo.user} />
    <h2 className="todo_title">{`Todo: ${todo.title}`}</h2>
    {todo.completed
      ? <span className="todo_completed">Completed</span>
      : <span className="todo_completed">Not completed</span>}
  </div>
);
