import { ToDoUsersAll } from '../types/ToDoUsersAll';
import { UserInfo } from '../UserInfo/UserInfo';
import './ToDoInfo.scss';

type Props = {
  todo: ToDoUsersAll;
};

export const ToDoInfo: React.FC<Props> = ({ todo: todoEach }) => (
  <div className={
    todoEach.completed ? 'todo__items-header' : 'todo__items-header--not'
  }
  >
    <div className={
      todoEach.completed ? 'todo__completed' : 'todo__completed--not'
    }
    />
    <p>
      {todoEach.title}
      {todoEach.user && (
        <UserInfo user={todoEach.user} />
      )}
    </p>
  </div>
);
