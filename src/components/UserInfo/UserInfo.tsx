import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="responsiblePerson">
    <h4 className="responsiblePerson__name">
      {user.name}
    </h4>
    <a className="responsiblePerson__email" href={`mailto:${user.email}`}>
      {`Mail me: ${user.email}`}
    </a>
  </div>
);
