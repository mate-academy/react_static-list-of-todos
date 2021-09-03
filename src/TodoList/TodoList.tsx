import { UserInfo } from '../UserInfo/UserInfo';

import { TodoInfo } from '../TodoInfo/TodoInfo';

import { PropsUser } from '../type';

export const TodoList: React.FC<PropsUser> = (props) => {
  const { arrayTodos } = props;

  return (
    <>
      { arrayTodos.map(preparedTodo => {
        const { todo, user } = preparedTodo;
        const { completed } = todo;

        const status = completed ? 'list completed' : 'list working';

        return (
          <ul key={todo.id} className={status}>
            <UserInfo user={user} />
            <TodoInfo check={todo} />
          </ul>
        );
      })}
    </>
  );
};
