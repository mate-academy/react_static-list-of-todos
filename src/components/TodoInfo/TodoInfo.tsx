import { PreparedTodo } from '../../types/PreparedTodo';

import './TodoInfo.scss';

type Props = PreparedTodo;

export const TodoInfo: React.FC<Props> = (props) => {
  const {
    title,
    completed,
  } = props;

  return (
    <ul className="todoInfo">
      <li className="todoInfo__todo">
        {title}
      </li>
      <li className="todoInfo__todo">
        {completed ? 'Done' : 'In progres'}
      </li>
    </ul>
  );
};
