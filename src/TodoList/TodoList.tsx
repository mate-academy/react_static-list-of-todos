import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo_list">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
