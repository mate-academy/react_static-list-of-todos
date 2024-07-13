import React from "react";
import { Todo } from "../../types/Todo";
import { UserInfo } from "../../components/UserInfo"

type Props = {
  todo: Todo
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return(
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
        <h2 className="TodoInfo__title">{todo.title}</h2>

        <UserInfo user={todo.user} />
      </article>
  );
}
