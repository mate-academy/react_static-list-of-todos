import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ id, name, email }) => (
  <>
    <div>
      {id}
    </div>
    <div>
      {name}
    </div>
    <div>
      {email}
    </div>
  </>
);
