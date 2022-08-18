// Add the required types and props

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <article
          className="TodoInfo TodoInfo--completed"
          key={todo.id}
        >

          <TodoInfo todo={todo} />
        </article>
      ))}
    </section>
  </>

);
