// Don't forget to import the React library
import { FC } from 'react';
import { PreparedTodos } from '../../types';
import { UserInfo } from '../UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
type Props = {
  todo: PreparedTodos;
};

// Add a default export statement for TodoInfo component to use it in the other files
export const TodoInfo: FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
  } = todo;

  return (
    <div className="todo__info">
      <h2 data-cy="title">{title}</h2>
      <h3 data-cy="status">
        {
          completed
            ? 'Progress is completed!'
            : 'Progress is not completed!'
        }
      </h3>
      <h3>
        {
          todo.user
          && <UserInfo user={todo.user} />
        }
      </h3>
    </div>
  );
};
