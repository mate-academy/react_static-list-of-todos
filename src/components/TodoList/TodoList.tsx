import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todosList: Todo[],
};
export const TodoList:React.FC<Props> = ({ todosList }) => (
  <section className="TodoList">
    {todosList.map(todo1 => <TodoInfo todo={todo1} key={todo1.id} />)}
  </section>
);
