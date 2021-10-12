import { Todo } from '../types/Todo';

type Props = Pick<Todo, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <div className="todo__item-title">{title}</div>
    <div className="todo__item-status">{completed ? 'done' : 'in progress'}</div>
  </>
);
