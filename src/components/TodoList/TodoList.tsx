import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

// Add the required types and props
interface Props {
  todos:Todo[];
}

export const TodoList: FC<Props> = (props) => {
  const { todos: data } = props;

  return (
    <section className="TodoList">
      {data.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
    </section>
  );
};
