import classNames from 'classnames';
import './TodoInfo.scss';
import { Todo } from '../../types/Todo';

type TodoData = Omit<Todo, 'id'>;

type Props = {
  todo: TodoData,
};

classNames({ foo: true }, { bar: true });

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const status = todo.completed ? 'Completed' : 'Not completed';

  return (
    <div className="todo">
      <div className={classNames(
        'todo__status',
        {
          'todo__status--completed': todo.completed,
        },
      )}
      >
        {status}
      </div>
      <h2 className="todo__title">
        {todo.title}
      </h2>
    </div>
  );
};
