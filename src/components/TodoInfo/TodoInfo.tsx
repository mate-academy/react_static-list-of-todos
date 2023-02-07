import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

import users from '../../api/users';

import { Todo } from '../../types/Todo';
import { User } from '../../types/User';

// Add the required types and props

function findPeople(user: User | null, userid:number) {
  return users
    .find((people) => people.id === userid || people.name === user?.name);
}

export const TodoInfo = ({ todo }: { todo: Todo }) => {
  const {
    userId,
    // id,
    title,
    completed,
    user,
  } = todo;
  const userData = findPeople(user, userId);

  return (
    <article className={
      classNames('TodoInfo', { 'TodoInfo--completed': completed })
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {userData === undefined ? null : <UserInfo user={userData} />}
    </article>
  );
};
