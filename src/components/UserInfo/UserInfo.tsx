import { User } from '../../types/types';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <p>{`Name: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
  </div>
);
