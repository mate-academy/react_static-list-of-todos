/// <reference types="react-scripts" />

interface Geo {
  lat: string,
  lng: string,
}

interface InfoOfCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: InfoOfCompany,
}

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}
