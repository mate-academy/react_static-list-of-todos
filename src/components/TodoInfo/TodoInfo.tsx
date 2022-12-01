// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoItem = {
  props: Todo
};

export const TodoInfo: React.FC<TodoItem> = ({ props }) => {
  // const {
  //   title,
  //   completed,
  //   user,
  // } = props;

  if (props.user) {
    return (
      <article className={`TodoInfo${props.completed && ' TodoInfo--completed'}`}>
        <h2 className="TodoInfo__title">{props.title}</h2>
        <UserInfo user={props.user} />
      </article>
    );
  }

  return (
    <article className={`TodoInfo${props.completed && ' TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{props.title}</h2>
    </article>
  );
};
