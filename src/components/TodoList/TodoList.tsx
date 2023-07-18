import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type TypeTodos = {
  todosList: Todo[]
};

export const TodoList: React.FC<TypeTodos> = ({ todosList }) => (
  <section className="TodoList">
    {todosList.map((todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
