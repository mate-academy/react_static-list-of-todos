// import todosFromServer from '../../api/todos';
// import usersFromServer from '../../api/users';
// import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
// import { UserInfo } from '../UserInfo';

interface Props {
  todos: Todo[];
}

// const newTodo = todosFromServer.map(todoItem => ({
//   ...todoItem,
//   user: usersFromServer.find(user => user.id === todoItem.userId) || null,
// }));

// console.log(newTodo)

export const TodoList:React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList" key={todo.id}>
        <TodoInfo todo={todo} />
      </section>
    ))}
  </>
);
