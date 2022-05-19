import { UserType } from '../../types/pdTypes';

export const UserInfo: React.FC<UserType> = ({ name, email, username }) => {
  return (
    <div className="User">
      <h2 className="User__name">
        {name}
      </h2>
      {' - '}
      <h3 className="User__surname">
        {username}
      </h3>
      <h4 className="User__email">
        {email}
      </h4>
    </div>
  );
};
