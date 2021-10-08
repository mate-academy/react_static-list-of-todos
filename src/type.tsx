interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export type PropsTodo = {
  check: Todo
};

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

export interface UserArray {
  todo: Todo,
  user: User | null,
}

export type PropsUser = {
  arrayTodos: UserArray[]
};
