// Add the required types and props
import { Todo } from '../../types/Todo';

export const TodoInfo = (props: { todo: Todo }) => (
  <>
    <article
      className={`TodoInfo ${props.todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{props.todo.title}</h2>

      {props.todo.user && (
        <a className="UserInfo" href={`mailto:${props.todo.user.email}`}>
          {props.todo.user.name}
        </a>
      )}
    </article>
  </>
);
