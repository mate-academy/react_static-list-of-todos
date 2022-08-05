import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList:React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList" key={todo.id}>
        <TodoInfo todo={todo} />
      </section>
    ))}
  </>
);
