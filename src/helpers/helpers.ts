import { FullTodo, Todo, User } from '../types/types';

export function prepareTodos(todosList: Todo[], users:User[]): FullTodo[] {
  return todosList.map((todo) => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));
}
