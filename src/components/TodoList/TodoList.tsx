import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodosList {
  todosList: Todo[];
}

export const TodoList: React.FC<TodosList> = ({ todosList }) => {
  return (
    <section className="TodoList">
      {todosList.map(todoItem => <TodoInfo todoInfo={todoItem} />)}

      <article className="TodoInfo TodoInfo--completed">
        <h2 className="TodoInfo__title">JS</h2>

        <a className="UserInfo" href="mailto:Shanna@melissa.tv">
          Ervin Howell
        </a>
      </article>

      <article className="TodoInfo">
        <h2 className="TodoInfo__title">React</h2>

        <a className="UserInfo" href="mailto:Nathan@yesenia.net">
          Clementine Bauch
        </a>
      </article>
    </section>
  );
};
