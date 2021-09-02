interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export type PropsTodo = {
  check: Todo
};

interface First {
  lat: string,
  lng: string,
}

interface Second {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: First
}

interface Third {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Second,
  phone: string,
  website: string,
  company: Third,
}

export interface UserArray {
  todo: Todo,
  user: User | null,
}

export type PropsUser = {
  arrayTodos: UserArray[]
};
