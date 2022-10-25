import { Todo } from '../../types/Todo';

export const TodoList: React.FC<Todo> = ({ title, user, completed }) => (
  <section className="TodoList">
    <article className={`TodoInfo + ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      <a className="UserInfo" href="mailto:Sincere@april.biz">
        { user ? user.name : '' }
      </a>
    </article>
  </section>
);
