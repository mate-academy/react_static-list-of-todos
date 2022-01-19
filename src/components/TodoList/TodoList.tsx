import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo__list">
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
