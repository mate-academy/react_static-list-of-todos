import './TodoInfo.scss';
import classNames from 'classnames';
import UserInfo from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;

  return (
    <div
      className={classNames('todo-info', { done: todo.completed })}
    >
      TASK:&nbsp;
      {todo.title}
      <br />
      {todo.completed
        ? ('DONE')
        : ('NOT DONE')}
      {todo.user
        ? (<UserInfo user={todo.user} />)
        : null}
    </div>
  );
};

export default TodoInfo;
