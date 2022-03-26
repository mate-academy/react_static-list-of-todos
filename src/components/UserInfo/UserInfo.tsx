import { IUser } from '../../types/IUser';
import './UserInfo.scss';

type Props = {
  user: IUser;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="todo__user">
    <p className="todo__name">
      name: &nbsp;
      {user.name}
    </p>
    <p className="todo__name">
      mail: &nbsp;
      {user.email}
    </p>
  </div>
);
