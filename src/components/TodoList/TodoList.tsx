import classNames from 'classnames';
import todos from '../../api/todos';
import { Todo } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoList.scss';

type Props = {
  todosArray: Todo[];
};

export const TodoList: React.FC<Props> = ({ todosArray }) => (
  <table className="table">
    <thead className="thead">
      <tr className="thead__row">
        <td className="thead__column">Name</td>
        <td className="thead__column">Username</td>
        <td className="thead__column">Email</td>
        <td className="thead__column">Title</td>
        <td className="thead__column">Status</td>
      </tr>
    </thead>
    <tbody className="tbody">
      {todosArray.map((todo, index) => {
        return todo.user !== null
          ? (
            <tr
              className={classNames('tbody__row', {
                tbody__done: todos[index].completed,
              })}
              key={todo.user.id}
            >

              <UserInfo
                name={todo.user.name}
                username={todo.user.username}
                email={todo.user.email}
              />

              <TodoInfo
                title={todos[index].title}
                status={todos[index].completed}
              />
            </tr>
          )
          : (
            <tr
              className={classNames('tbody__row', {
                tbody__done: todos[index].completed,
              })}
            >

              <TodoInfo
                title={todos[index].title}
                status={todos[index].completed}
              />
            </tr>
          );
      })}
    </tbody>
  </table>
);
