import { User } from '../../types/User';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="card-content">
    <h4 className="title is-5">
      {name}
    </h4>
    <span className="subtitle is-6">
      {email}
    </span>
  </div>
);
