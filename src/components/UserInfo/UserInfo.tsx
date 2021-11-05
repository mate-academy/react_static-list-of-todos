import { User } from '../../types/types';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="Todolist_user-info">
    <p>{`Name: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
  </div>
);
