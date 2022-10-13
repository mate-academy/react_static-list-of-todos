import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

interface Prop {
  todos: Todo[];
}
export const TodoList: React.FC<Prop> = ({ todos }) => {
  const list = todos.map((task) => (
    <TodoInfo key={task.id.toString()} todo={task} />
  ));

  return (
    <>
      {list || null}
    </>
  );
};
