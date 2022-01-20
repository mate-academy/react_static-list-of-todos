import { TodoInfo } from './TodoInfo';
import './Todo.scss';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo__list">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
