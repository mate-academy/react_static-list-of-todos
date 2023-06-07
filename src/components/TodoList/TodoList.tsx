import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodosList {
  todos: Todo[];
}

export const TodoList: React.FC<TodosList> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todoItem => (
        <TodoInfo todo={todoItem} key={todoItem.id} />
      ))}
    </section>
  );
};
