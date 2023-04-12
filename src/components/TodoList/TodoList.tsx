import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todolist: Todo[];
};

export const TodoList: React.FC<Props> = ({ todolist }) => {
  return (
    todolist.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))
  );
};
