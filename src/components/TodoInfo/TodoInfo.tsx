import classNames from 'classnames';
import { Todo } from "../../types/Todo";
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {

  return (
  <article className={
    classNames(
      'TodoInfo',
      completed && 'TodoInfo--completed',
    )
  }
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user 
    ? ( <UserInfo {...user} />) 
    : undefined}
  </article>
)};
