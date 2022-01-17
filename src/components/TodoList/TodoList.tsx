import { TodoInfo } from '../TodoInfo/TodoInfo';
import './todoList.scss';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo__list">
    {preparedTodos.map(todo => (
      <li className="todo__item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
