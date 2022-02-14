import './TodoList.scss';
import { PreparedTodo } from '../../types/preparedTodos';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todoList__todo">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
