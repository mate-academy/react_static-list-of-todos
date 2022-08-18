// Add the required types and props

import { User } from '../../types/User';

type Props = {
  users: User[],
};

export const UserInfo:React.FC<Props> = ({ users }) => (
  <>

    {users.map(user => (
      <a
        className="UserInfo"
        href={`mailto:${user.email}`}
        key={user.id}
      >
        {user.name}
      </a>
    ))}

  </>
);
