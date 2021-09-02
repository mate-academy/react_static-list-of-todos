import { PropsTodo } from '../type';

export const TodoInfo: React.FC<PropsTodo> = (checking) => {
  const { check } = checking;
  const { title, completed } = check;

  return (
    <>
      <li className="title">
        {title}
      </li>
      <li>
        {completed ? 'completed' : 'working'}
      </li>
    </>
  );
};
