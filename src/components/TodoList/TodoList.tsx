import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </section>
);
