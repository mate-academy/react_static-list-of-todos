import { Todo } from '../Types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {`task: ${todo.title}`}
    <br />
    {`completed: ${todo.completed}`}
  </>
);
