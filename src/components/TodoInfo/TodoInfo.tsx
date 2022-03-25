import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2>
      {todo.title}
    </h2>
    <h2>
      {`Completed: ${todo.completed ? 'yes' : 'no'}`}
    </h2>
  </>
);
