import { PropsTodo } from '../type';

export const TodoInfo: React.FC<PropsTodo> = (checking) => {
  const { check } = checking;
  const { title, completed } = check;

  return (
    <>
      <p className="list__title">
        {title}
      </p>
      <p>
        {completed ? 'completed' : 'working'}
      </p>
    </>
  );
};
