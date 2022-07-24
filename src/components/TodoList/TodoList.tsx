import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
