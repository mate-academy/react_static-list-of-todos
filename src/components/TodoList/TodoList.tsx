import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(nextTodo => (
      <TodoInfo
        todo={nextTodo}
        key={nextTodo.id}
      />
    ))}
  </section>
);
