import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h1>
      {todo.title}
    </h1>

    <span>
      {`id: ${todo.id} | completed: ${todo.completed ? 'yes' : 'no'}`}
    </span>
  </>
);
