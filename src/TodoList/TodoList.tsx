import { UserInfo } from '../UserInfo/UserInfo';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { todos } from '../api/todos';

import { PropsUser } from '../type';

export const TodoList: React.FC<PropsUser> = (props) => {
  const { arrayTodos } = props;

  return (
    <>
      { arrayTodos.map((preparedTodo, i) => {
        const { uniqueKey, user } = preparedTodo;

        return (
          <div key={uniqueKey} className="grid">
            <UserInfo user={user} />
            <TodoInfo check={todos[i]} />
          </div>
        );
      })}
    </>
  );
};
