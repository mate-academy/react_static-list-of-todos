export interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type UserType = {
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
  }
};

export type PreparedType = {
  user: UserType;
  todo: TodoType[];
};
