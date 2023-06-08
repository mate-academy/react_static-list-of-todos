import { Fragment } from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <Fragment key={todo.id}>
        <TodoInfo todo={todo} />
      </Fragment>
    ))}
  </section>
);
