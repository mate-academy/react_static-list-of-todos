import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todos[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map((elem) => (
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
