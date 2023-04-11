import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../../types/Todo';

interface Props {
  todoArr: Todo[];
}

export const TodoList: React.FC<Props> = ({ todoArr = [] }) => (
  <section className="TodoList">
    {todoArr.map(todo => (
      <article
        className={classNames('TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          })}
      >
        <TodoInfo todoProp={todo} key={todo.id} />
      </article>
    ))}

  </section>
);
