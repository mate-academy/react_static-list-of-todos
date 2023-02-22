// Add the required types and props
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Todos = {
  todos: Todo[];
};
export const TodoList = ({ todos } : Todos) => (
  <ul>
    {todos.map(todo => (
      <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      </article>
    ))}
  </ul>

);
