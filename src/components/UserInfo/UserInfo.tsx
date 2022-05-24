import { User } from '../types/User';
import './User.scss';

type Props = {
  user: User
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="todo__user user">
      <p className="user__userInfo">
        {`Username: ${user.username}`}
        <br />
        {`Name: ${user.name}`}
        <br />
        {`Phone: ${user.phone}`}
        <br />
        {`Website: ${user.website}`}
        <br />
        {`Adress: ${user.address.city} ${user.address.street} ${user.address.suite}`}
      </p>
    </div>
  );
};

export default UserInfo;
