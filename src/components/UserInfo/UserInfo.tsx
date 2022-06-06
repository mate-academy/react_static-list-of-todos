// Don't forget to import the React library
import { FC } from 'react';
import { Users } from '../../types';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
type Props = {
  user: Users;
};

// Add a default export statement for UserInfo component to use it in the other files
export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <ul className="user__info" key={user.id}>
      <li className="user__info-name" data-cy="username">
        {`Username: ${user.name}`}
      </li>

      <li className="user__info-email" data-cy="email">
        {`Email: ${user.email}`}
      </li>
    </ul>
  );
};

export default UserInfo;
