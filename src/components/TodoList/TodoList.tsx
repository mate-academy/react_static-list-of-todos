import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <section className="TodoList">
      <ul className="todos">
        {todos.map(todo => (
          <li key={todo.id} className="todo">
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  </>
);
