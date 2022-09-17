import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <article className={classNames(
          'TodoInfo',
          { 'TodoInfo--completed': todo.completed },
        )}
        >

          <TodoInfo todo={todo} />
        </article>
      ))}
    </section>
  </>

);

// import { Todo } from '../../types/Todo';
// import { TodoInfo } from '../TodoInfo';
// import './TodoList.scss';

// type Props = {
//   todos: Todo[];
// };

// export const TodoList: React.FC<Props> = ({ todos }) => (
//   <section className="TodoList">
//     {todos.map(todo => (
//       <TodoInfo todo={todo} key={todo.id} />
//     ))}
//   </section>
// );
