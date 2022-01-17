import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map((todoItem) => (
      <li className="card" key={todoItem.id}>
        <TodoInfo todoItem={todoItem} />
      </li>
    ))}
  </ul>
);
