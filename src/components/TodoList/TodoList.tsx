import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodoListProps {
  todoList: Todo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => (
  <section className="TodoList">
    {todoList.map(todo => (
      <TodoInfo todoInfo={todo} />
    ))}
  </section>
);
