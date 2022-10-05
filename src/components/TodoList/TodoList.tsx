// Add the required types and props


import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoItem => (
      <TodoInfo todo={todoItem} key={todoItem.id} />
    ))}
  </section>
);
