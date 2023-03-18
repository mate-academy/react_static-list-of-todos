import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

// Add the required types and props
type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = (props) => (
  <>
    <section className="TodoList">
      {props.todos.map(todo => (
        <TodoInfo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      ))}
    </section>
  </>
);
