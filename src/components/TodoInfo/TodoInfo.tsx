import { Todos } from '../../types/todos';

type Props = {
  todos: Todos
};

export const TodoInfo: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.title}
  </div>
);
