/// <reference types="react-scripts" />
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Todo{
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

interface PreparedTodos extends Todo {
  user?: User | null;
}
