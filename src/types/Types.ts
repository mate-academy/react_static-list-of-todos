 export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null ,
}

export type PropsList = {
  listOfTodos: Todo[];
};

export type PropsItem = {
  todo: Todo;
};

export type PropsUser = {
  user: User | null;
};
