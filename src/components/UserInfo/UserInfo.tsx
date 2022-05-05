import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({
  name, email,
}) => (
  <>
    <span>
      {`Name: ${name}`}
    </span>
    <span>
      {`Email: ${email}`}
    </span>
  </>
);
