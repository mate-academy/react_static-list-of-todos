import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TypeTodoList = {
  todos: Todo[];
};

export const TodoList: React.FC<TypeTodoList> = ({ todos }) => {
  const todoInfo = todos.map(todo => <TodoInfo todo={todo} />);

  return (
    <section className="TodoList">
      {todoInfo}
    </section>
  );
};
