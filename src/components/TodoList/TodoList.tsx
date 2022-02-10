import { PreparedTodo } from '../../types/PreparedTodo';

import TodoInfo from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="Todo-list">
    {preparedTodos.map(preparedTodo => (
      <li className="Todo-list__item">
        <TodoInfo preparedTodo={preparedTodo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
