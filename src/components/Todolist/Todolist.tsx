import { PreparedTodo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const Todolist: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="TodoList">
    {preparedTodos.map((todo: PreparedTodo) => {
      return (
        <li key={todo.id}>
          <TodoInfo {...todo} />
        </li>
      );
    })}
  </ul>
);
