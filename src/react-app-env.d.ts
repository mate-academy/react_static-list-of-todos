/// <reference types="react-scripts" />

interface User {
  name: string;
  id: number;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface Adress {
  address: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}
