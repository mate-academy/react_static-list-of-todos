import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todoOne => (
      <TodoInfo
        key={todoOne.id}
        todo={todoOne}
      />
    ))}
  </>
);
