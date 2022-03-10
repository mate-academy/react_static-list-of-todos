type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <h2 className="title">
      {title}
    </h2>
    <h3 className="yes_no">
      {completed}
    </h3>
  </>
);
