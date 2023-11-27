import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

export type TodosProps = {
  todos: Todo[],
};

export const TodoList = ({ todos }: TodosProps) => {
  return (
    <section className="TodoList">
      {
        todos.map(todo => <TodoInfo todo={{ ...todo }} key={todo.id} />)
      }
    </section>
  );
};
