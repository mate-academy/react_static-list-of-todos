import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todoItem => (
        <TodoInfo todo={todoItem} key={todoItem.id} />
      ))}
    </section>
  </>
);
