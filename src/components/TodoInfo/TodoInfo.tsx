import { UserInfo } from '../UserInfo/UserInfo';

import { Props } from '../../types/Props';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <h2 className="todo__title">{title}</h2>
    {completed
      ? (
        <p className="todo__complited todo__complited--true">
          Complited
        </p>
      )
      : (
        <p className="todo__complited todo__complited--false">
          Not complited
        </p>
      )}
    {user && (
      <div className="todo__user user">
        <UserInfo {...user} />
      </div>
    )}
  </>
);
