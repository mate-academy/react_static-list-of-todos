import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)}
  </>
);
