import { PreparedTodo } from '../../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo">
    {preparedTodos.map(preparedTodo => (
      <li className="todo__item" key={preparedTodo.todo.id}>
        <TodoInfo preparedTodo={preparedTodo} />
      </li>
    ))}
  </ul>
);
