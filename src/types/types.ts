export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAdress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface UserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
