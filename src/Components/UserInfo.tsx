import { User } from '../Types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="userName">
      {`name: ${user.name}`}
    </span>
    <br />
    {`email: ${user.email}`}
  </>
);
