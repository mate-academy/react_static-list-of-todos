import './TodoInfoStyle.scss';
import { TodoItem } from '../../types/TodoItem';

type Props = {
  todo: TodoItem;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div>{todo.title}</div>
    <div>{todo.completed ? 'completed' : 'not completed'}</div>
  </>
);
