import { User } from '../../types';
import './UserInfo.scss';

export type Props = {
  userItem: User;
};

export const UserInfo: React.FC<Props> = ({ userItem }) => (
  <div className="todo__userInfo">
    <>
      <p className="todo__userName">
        <strong>
          {'Author: '}
        </strong>
        {userItem.name}
      </p>
      <p className="todo__userEmail">
        <strong>
          {'Email: '}
        </strong>
        {userItem.email}
      </p>
    </>
  </div>
);
