import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <h3 className="UserInfo__name">
      {user.name}
    </h3>
    <a href={`mailto:${user.email}`} className="UserInfo__email">
      {user.email}
    </a>
  </div>
);
