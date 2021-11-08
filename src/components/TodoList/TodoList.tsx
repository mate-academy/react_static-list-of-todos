import './TodoListStyle.scss';

import { TodoItem } from '../../types/TodoItem';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  prepareTodos: TodoItem[],
};

export const TodoList: React.FC<Props> = ({ prepareTodos }) => (
  <ul className="todoList">
    {prepareTodos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </ul>
);
