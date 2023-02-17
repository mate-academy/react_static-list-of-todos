import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodosProps {
  todos: Todo[]
}

export const TodoList: React.FC<TodosProps> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map((todoItem) => (
        <TodoInfo todo={todoItem} key={todoItem.id} />
      ))}
    </section>
  </>
);
