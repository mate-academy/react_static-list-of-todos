import { TodoType } from '../../types/pdTypes';

type Props = {
  todo: TodoType[];
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <ul>
      {todo.map(el => {
        return (
          <li key={el.id} className={el.completed ? 'Active' : ''}>
            {el.title}
          </li>
        );
      })}
    </ul>
  );
};
