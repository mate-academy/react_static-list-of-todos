export type Adress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  },
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
};

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user?: User | null
};

export type TodoListProps = {
  preparedTodos: Todo[]
};

export type TodoInfoProps = {
  todo: Todo
};

export type UserInfoProps = {
  user: User,
};
