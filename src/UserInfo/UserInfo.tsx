import { User } from '../types/User';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="card-content">
    <p>{`Name: ${name}`}</p>
    <p>{`E-mail: ${email}`}</p>
  </div>
);
