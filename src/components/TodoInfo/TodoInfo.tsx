import { Todo } from '../../types/Todo';
import './todoInfo.scss';

type Props = {
  todoInfo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => (
  <p className="todoList__progress">
    {todoInfo.completed ? ('Complete') : ('Still working')}
  </p>
);
