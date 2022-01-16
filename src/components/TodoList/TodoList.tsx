import { Todo } from '../../types/Interfaces';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="App__list">
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
