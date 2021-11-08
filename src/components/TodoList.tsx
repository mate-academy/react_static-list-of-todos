import { FC } from 'react';
import { Todo } from '../typedefs';
import { TodoInfo } from './TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: FC<Props> = (props) => {
  const { todos } = props;

  return (
    <section className="userCard">
      <div className="userCard__wrapper">
        <ul className="userCard__list">
          {
            todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)
          }
        </ul>
      </div>
    </section>
  );
};
