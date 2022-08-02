// Add the required types and props

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li>
        <TodoInfo key={todo.id} todo={todo} />
      </li>
    ))}
  </ul>
);
