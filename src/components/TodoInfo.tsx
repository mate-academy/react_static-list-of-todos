import classNames from 'classnames';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
}) => (
  <>
    <strong className={classNames(completed ? 'completed' : 'active')}>
      {title}
      {completed}
    </strong>
  </>
);
