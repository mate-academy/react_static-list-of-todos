/// <reference types="react-scripts" />
interface ForUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

interface ForTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type ForUsers = ForUser[];
type ForTodos = ForTodo[];

export type ForPreparedTodos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: ForUser | null;
};
