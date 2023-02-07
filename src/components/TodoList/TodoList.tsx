import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type TodoType = {
  todos: Todo[];
};

// Add the required types and props
export const TodoList = ({ todos }: TodoType) => (
  <section className="TodoList">
    { todos.map((todosTask) => {
      return (
        <TodoInfo todo={todosTask} key={todosTask.userId} />
      );
    })}
  </section>
);
