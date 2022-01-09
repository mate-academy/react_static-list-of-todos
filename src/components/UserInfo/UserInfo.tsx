import { User } from '../../types/PropTypes';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <>
    <p>
      {userInfo.name}
    </p>
    <p>
      {userInfo.email}
    </p>
  </>
);
