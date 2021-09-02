import { PropsTodo } from '../type';

export const TodoInfo: React.FC<PropsTodo> = (checking) => {
  const { check } = checking;
  const { title, completed } = check;
  const className = completed ? 'completed' : 'working';

  return (
    <>
      <div className="title">
        {title}
      </div>
      <div className={className}>
        {completed ? 'completed' : 'working'}
      </div>
    </>
  );
};
