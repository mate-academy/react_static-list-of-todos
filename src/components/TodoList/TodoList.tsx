import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({
  preparedTodos,
}) => (
  <ul className="todos">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
