import { Todo } from '../types/List';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <h2 className="todo__title">
        {todo.title}
      </h2>
      <p className="todo__complete">
        {todo.completed ? 'Task complete' : 'Task in progress'}
      </p>
      <div className="todo__userInfo">
        {todo.user ? <UserInfo user={todo.user} /> : <p>No user Info</p>}
      </div>
    </>
  );
};

export default TodoInfo;
