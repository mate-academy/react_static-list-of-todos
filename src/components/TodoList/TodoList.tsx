import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodosList {
  todosList: Todo[];
}

export const TodoList: React.FC<TodosList> = ({ todosList }) => {
  return (
    <section className="TodoList">
      {todosList.map(todoItem => (
        <TodoInfo todoInfo={todoItem} key={todoItem.id} />
      ))}
    </section>
  );
};
