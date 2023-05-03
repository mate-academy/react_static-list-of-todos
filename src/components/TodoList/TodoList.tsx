import { FC } from 'react';
import users from '../../api/users';
import { Todo } from '../../types/Todo';
import './TodoList.scss';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

// Add the required types and props

interface TodoLists {
  todoLists: Todo[]
}

export const TodoList: FC<TodoLists> = (props) => {
  const { todoLists } = props;

  return (
    <section className="ui list">
      {todoLists.map((list: Todo) => {
        const {
          userId,
          id,
          title,
          completed,
        } = list;

        const isCompletedClass = completed
          ? 'TodoInfo TodoInfo--completed'
          : 'TodoInfo';

        const user: User | null
         = users.find((el) => el.id === userId) || null;

        return (
          <article key={id} className={isCompletedClass}>
            <h2 className="TodoInfo__title">
              {title}
            </h2>
            <UserInfo user={user as User} />
          </article>
        );
      })}
    </section>
  );
};
