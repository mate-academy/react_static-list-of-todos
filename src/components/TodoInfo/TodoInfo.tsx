type Props = {
  title: string;
  status: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, status }) => (
  <>
    <p>{title}</p>
    <p className="item_true__status">{status ? 'Yes' : 'No'}</p>
  </>
);
