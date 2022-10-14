import './TodoList.scss';
// Add the required types and props
import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </ul>
);
