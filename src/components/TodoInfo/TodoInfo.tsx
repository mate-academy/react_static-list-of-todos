import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <p className="todo-title">{todo.title}</p>
      {' '}
      {todo.completed ? <p className="completed-todo">completed</p> : <p className="todo-in-progress">in progress</p>}
    </>
  );
};
