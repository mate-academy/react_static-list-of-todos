import classNames from 'classnames';
import { User } from '../../types/User';

import { UserInfo } from '../UserInfo';

type Props = {
  completed: boolean,
  title: string,
  user: User | null
};
// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ completed, title, user }) => (
  <>
    <article className={classNames('TodoInfo',
      { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo email={user.email} name={user.name} />}
    </article>
  </>
);
