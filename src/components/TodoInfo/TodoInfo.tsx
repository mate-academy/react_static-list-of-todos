import { Todo } from '../../types';
import './TodoInfo.scss';

export type Props = {
  item: Todo;
};

export const TodoInfo: React.FC<Props> = ({ item }) => (
  <>
    <div className="todo_todoInfo">
      <h3 className="todo__title">
        {item.title.toUpperCase()}
      </h3>

      <p className="todo__status">
        <strong>
          {'Status: '.toUpperCase()}
        </strong>
        {(item.completed) ? ' Done! ' : ' In progress... '}
      </p>
    </div>
  </>
);
