// Add the required props
// export const TodoList = () => (
//   <>TodoList markup</>
// );

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </ul>
);
