type Props = {
  completed: boolean;
  title: string;
};

export const TodoInfo: React.FC<Props> = ({ completed, title }) => {
  return (
    <>
      <div>
        {title}
      </div>
      <div>
        {
          completed && (
            <div className="TodoList_Item-Status">DONE</div>
          )
        }
      </div>
    </>
  );
};
