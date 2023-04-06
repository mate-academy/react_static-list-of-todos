import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};
// Add the required types and props
export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map(todo => (
        <li className="TodoList__item" key={todo.id}>
          <TodoInfo
            completed={todo.completed}
            title={todo.title}
            user={todo.user}
          />
        </li>
      ))}
    </ul>
  </section>
);
