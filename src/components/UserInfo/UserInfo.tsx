import { User } from '../../types';
import './UserInfo.scss';

export type Props = {
  userItem: User | null;
};

export const UserInfo: React.FC<Props> = ({ userItem }) => (

  <div className="todo__userInfo">
    {(userItem) && (
      <>
        <p className="todo__userName">
          <strong>
            {'Author: '.toUpperCase()}
          </strong>
          {userItem.name}
        </p>
        <p className="todo__userEmail">
          <strong>
            {'Email: '.toUpperCase()}
          </strong>
          {userItem.email}
        </p>
      </>
    )}
  </div>

);
