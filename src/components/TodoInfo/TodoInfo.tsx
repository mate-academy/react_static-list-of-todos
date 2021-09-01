import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

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
