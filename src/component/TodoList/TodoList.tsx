import { Todo } from '../../types/Todo';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import './todoList.scss';

type Props = {
  preparedTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list-group">
    {preparedTodos.map(todo => (
        <TodoInfo todo={todo} />
    ))}
  </ul>
);
