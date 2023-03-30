// Add the required types and props
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  const completedClass = (completed === true) ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${completedClass}`}>
        <h2 className="TodoInfo__title">{title}</h2>
        {user && (
          <a className="UserInfo" href={user.email}>
            {user.name}
          </a>
        )}
      </article>
    </>
  );
};
