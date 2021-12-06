import './TodoInfo.scss';
import { Todo } from '../../types/Todo';

type TodoData = Omit<Todo, 'id'>;

type Props = {
  todo: TodoData,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    { todo.completed
      ? (
        <div className="todo__status todo__status--completed">
          Completed
        </div>
      ) : (
        <div className="todo__status">
          Not completed
        </div>
      )}
    <h2 className="todo__title">
      {todo.title}
    </h2>
  </div>
);
