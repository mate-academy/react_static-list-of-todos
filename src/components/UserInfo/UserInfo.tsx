import './UserInfo.scss';

export const UserInfo = ({ ...user }) => (
  <div className="userInfo">
    <strong>
      {`Assigned to: ${user.name}`}
    </strong>
    <ul className="userInfo__contacts">
      <li>
        {`e-mail: ${user.email}`}
      </li>
      <li>
        {`call: ${user.phone}`}
      </li>
    </ul>
  </div>
);
