type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <>
      <p>{title}</p>
      <p className="item_true__status">{completed ? 'Yes' : 'No'}</p>
    </>
  );
};
