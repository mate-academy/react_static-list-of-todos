import { Todo } from '../../types/Todo';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import './todoList.scss';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list-group">
    {preparedTodos.map(todo => (
      <li className={`list-group-item ${todo.completed ? 'active' : ''} `} key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
