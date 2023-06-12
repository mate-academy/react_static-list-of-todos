import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todoItem => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);
