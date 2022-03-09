import Todo from './Interfaces';

type Props = {
  todos: Todo[];
};

export const TodoInfo: React.FC<Props> = ({ todos = [] }) => (
  <>
    {todos.map(todo => (
      <p>
        {todo.title}
        ,
        {todo.completed}
      </p>
    ))}
  </>
);
