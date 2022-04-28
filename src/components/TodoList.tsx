import { Todos } from '../types/Todos';
import { TodoInfo } from './TodoInfo';

type Props = {
  preparedTodos: Todos[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map((elem) => (
      <li key={elem.id}>
        <TodoInfo
          title={elem.title}
          status={elem.completed}
          user={elem.user}
        />
      </li>
    ))}
  </ul>
);
