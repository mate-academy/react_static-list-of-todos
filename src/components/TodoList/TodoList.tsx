import { TodoInfo } from '../TodoInfo';

// Add the required types and props
export const TodoList = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </section>
);
