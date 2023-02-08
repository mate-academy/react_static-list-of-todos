import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(person => (
      person.user
      && (
        <TodoInfo
          key={person.id}
          title={person.title}
          person={person.user}
        />
      )
    ))}
  </section>
);
