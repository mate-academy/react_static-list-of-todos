import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <section className="TodoList">
      { todos.map(person => {
        if (person.user != null) {
          return (
            <TodoInfo
              title={person.title}
              person={person.user}
            />
          );
        }

        return '';
      })}
    </section>
  </>
);
