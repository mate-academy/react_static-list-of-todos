/// <reference types="react-scripts" />

interface Todo {
  userId: number,
  id: number,
  title: title,
  completed: boolean,
}

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
};

type Geo = {
  lat: string,
  lng: string,
};

type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
};

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

interface PreparedTodos extends Todo {
  user: User | null,
}
