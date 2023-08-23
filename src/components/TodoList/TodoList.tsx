import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

// Add the required types and props
type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (

  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

// <article className="TodoInfo TodoInfo--completed">
//     <h2 className="TodoInfo__title">HTML</h2>

//     <a className="UserInfo" href="mailto:Sincere@april.biz">
//       Leanne Graham
//     </a>
//   </article>

//   <article className="TodoInfo TodoInfo--completed">
//     <h2 className="TodoInfo__title">CSS</h2>

//     <a className="UserInfo" href="mailto:Sincere@april.biz">
//       Leanne Graham
//     </a>
//   </article>

//   <article className="TodoInfo TodoInfo--completed">
//     <h2 className="TodoInfo__title">JS</h2>

//     <a className="UserInfo" href="mailto:Shanna@melissa.tv">
//       Ervin Howell
//     </a>
//   </article>

//   <article className="TodoInfo">
//     <h2 className="TodoInfo__title">React</h2>

//     <a className="UserInfo" href="mailto:Nathan@yesenia.net">
//       Clementine Bauch
//     </a>
//   </article>
