import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const todoID = `todo-${todo.id}`;

  return (
    <div className="TodoInfo">
      <input
        type="checkbox"
        id={todoID}
        defaultChecked={todo.completed}
        className="TodoInfo__toggler"
      />

      <label htmlFor={todoID} className="TodoInfo__title">
        {todo.title[0].toUpperCase() + todo.title.slice(1)}
      </label>
    </div>
  );
};
