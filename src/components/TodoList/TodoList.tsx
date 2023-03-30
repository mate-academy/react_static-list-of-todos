// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

export type Props = {
  todoList: Todo[];
};

export const TodoList: React.FC<Props> = (props) => (
  <>
    {props.todoList.map(todo => (
      <section className="TodoList">
        <TodoInfo {...todo} key={todo.id} />
      </section>
    ))}
  </>
);
