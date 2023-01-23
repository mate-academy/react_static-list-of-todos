import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type ToDo = {
  todos: Todo[];
};

export const TodoList: React.FC<ToDo> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
