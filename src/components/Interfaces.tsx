interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Todo {
  user: User | null,
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default Todo;
