import { UserInfo } from '../UserInfo/UserInfo';

import { TodoInfo } from '../TodoInfo/TodoInfo';

import { PropsUser } from '../type';

export const TodoList: React.FC<PropsUser> = (props) => {
  const { arrayTodos } = props;

  return (
    <>
      { arrayTodos.map(preparedTodo => {
        const { todo, user } = preparedTodo;

        return (
          <div key={todo.id} className="grid">
            <UserInfo user={user} />
            <TodoInfo check={todo} />
          </div>
        );
      })}
    </>
  );
};
