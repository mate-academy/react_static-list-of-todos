// Add the required types and props
export const TodoInfo: React.FC<{ todos: Todo[] }> = () => (
  <>
    {todos.map((todo) => (
      <article
        className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        key={todo.id}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo userId={todo.userId} />
      </article>
    ))}
  </>
);
