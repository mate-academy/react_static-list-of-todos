/// <reference types="react-scripts" />

interface Todo {
  id: number,
  userId: number,
  title: string,
  completed: boolean,
}

interface User {
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

interface PreparedTodo extends Todo {
  user: User | null,
}
